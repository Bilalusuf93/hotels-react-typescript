/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import _, { toNumber } from "lodash";
import './Hotels.scss';
import { SearchForm } from '../SearchForm/SearchForm';
import { toDateIsVaid, addDays, filterByDate, getMinPrice, getMaxPrice, filterByName, filterByPrice, getNumberOfNight } from '../../Utilities';
import { getHotels } from '../../services/HotelService';
import { AxiosResponse } from 'axios';
import { ApiError, GenericApiResponse, Hotel, Sort } from '../../types/state';
import { HotelRefiners } from '../HotelRefiners/HotelRefiners';
import { AppConstants } from '../../appConstants';
import HotelCard from '../HotelCard/HotelCard';
import NotFound from '../NotFound/NotFound';

export const Hotels = () => {

    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');
    const [cookies, setCookie] = useCookies(['fromDate', 'toDate']);
    const [maxPrice, setMaxPrice] = useState<Number>(0);
    const [minPrice, setMinPrice] = useState<Number>(0);
    const [price, setPrice] = useState(0);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortColumn, setSortColumn] = useState<Sort>({ path: '', order: '' });

    // const [totalNights, setTotalNights] = useState<Number>(0);
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [filteredHotels, setFilterdHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<ApiError>({ hasError: false, messsage: '' });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getHotelsFromAPI();
    }, []);

    useEffect(() => {
        validateToDate();
    }, [fromDate]);

    useEffect(() => {
        getPageData();
    }, [searchQuery]);

    useEffect(() => {
        getPageData();
    }, [price]);
    useEffect(() => {
        getPageData();
    }, [sortColumn.path, sortColumn.order]);

    useEffect(() => {
        cookies.fromDate && setFromDate(cookies.fromDate);
        cookies.toDate && setToDate(cookies.toDate);
    }, []);

    useEffect(() => {
        if (cookies.fromDate && cookies.toDate) {
            getHotelList();
        }
    }, [hotels]);

    const updateFromDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromDate(event.target.value);
        setCookie('fromDate', event.target.value, { path: '/' });
    }
    const updateToDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDate(event.target.value);
        setCookie('toDate', event.target.value, { path: '/' });
    }
    const handleSearchByDate = () => {
        if (toDateIsVaid(toDate, fromDate)) {
            getHotelList();
        }
    }
    const validateToDate = () => {
        if (!toDateIsVaid(toDate, fromDate)) {
            setToDate(addDays(fromDate, 1))
        }
    }

    const getHotelList = () => {
        if (hotels && hotels.length > 0) {
            const totalNights = getNumberOfNight(fromDate, toDate);
            setMinPrice(parseInt(getMinPrice(hotels)?.price) * totalNights);
            setMaxPrice(parseInt(getMaxPrice(hotels)?.price) * totalNights);
            getPageData();
        }
    }

    const getHotelsFromAPI = async () => {
        try {
            setIsLoading(true);
            const response = (await getHotels()) as AxiosResponse<GenericApiResponse<Hotel[]>>;
            // eslint-disable-next-line no-eval
            const hotelList: Hotel[] = eval(
                response.data.toString()
            );
            if (hotelList && hotelList.length > 0) {
                setHotels(hotelList);
            }
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            setError({ hasError: true, messsage: error.message })
            console.log('[getHotelList]error=>', error);
        }
    }

    const updateRefiner = (e: React.ChangeEvent<HTMLInputElement>, refiner: string) => {
        if (refiner === AppConstants.Hotel_Filters.NAME) {
            setSearchQuery(e.target.value);
        } else {
            setPrice(parseInt(e.target.value));
        }
    }

    const sortByNamePrice = (path: string) => {
        setSortColumn({ path: path, order: `${sortColumn.order === 'asc' ? 'desc' : 'asc'}` });
    }

    const getPageData = () => {
        let filtered: Hotel[] = [];
        const totalNights = getNumberOfNight(fromDate, toDate);
        filtered = filterByDate(hotels, fromDate, toDate);
        filtered = filtered && filtered.length ? filterByName(filtered, searchQuery) : filtered;
        filtered = filtered && filtered.length ? filterByPrice(filtered, price, toNumber(totalNights)
        ) : filtered;
        filtered = sortColumn.order ? _.orderBy(filtered, [sortColumn.path], [sortColumn.order]) : filtered;
        setFilterdHotels(filtered);
        // return { data: filtered, totalNights: totalNights };
    }

    // const { data: filteredHotels, totalNights } = getPageData();
    if (error.hasError) {
        return <strong>{error.messsage}</strong>
    }

    return (<>
        <div>
            <SearchForm
                fromDate={fromDate}
                toDate={toDate}
                updateFromDate={updateFromDate}
                updateToDate={updateToDate}
                handleSearch={handleSearchByDate}
            />
        </div>
        {isLoading ? <div>Loading...</div> : hotels && hotels.length > 0 &&
            <div className='search-result-container'>
                <div>

                    <HotelRefiners
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        searchQuery={searchQuery}
                        updateRefiner={updateRefiner}
                        price={price}
                    />
                </div>
                <div>
                    {!filteredHotels || filteredHotels.length <= 0 ? <NotFound message='Not found data with specefied refiners/filters!' /> :
                        <HotelCard
                            hotelList={filteredHotels}
                            totalNights={getNumberOfNight(fromDate, toDate)}
                            sortBy={sortColumn}
                            sortByNamePrice={sortByNamePrice} />
                    }
                </div>

            </div>
        }
    </>);
}


