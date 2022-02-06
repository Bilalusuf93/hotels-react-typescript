import React from 'react';
import { AppConstants } from '../../appConstants';
import { HotelsCard } from '../../types/state';
import { CardDetails } from '../CardDetails/CardDetails';
import { Hotel } from '../../types/state';
import './HotelCard.scss';

const HotelCard = (props: HotelsCard) => {
    const { sortByNamePrice, totalNights, hotelList: data, sortBy } = props;

    const hotelList = () => {
        return data.map((hotel: Hotel, index) => {
            return <CardDetails key={index} totalNights={totalNights} {...hotel}></CardDetails>
        });
    }
    return <>
        <div className='sort-item'>
            <div className='total-Nights'>
                <span>{AppConstants.TOTAL_NO_OF_NIGHTS}:</span>
                {totalNights}
            </div>
            <div className='sort-button'>
                <div>
                    <input
                        type='button'
                        className={AppConstants.Sort_By_Value.NAME === sortBy.path ? 'active' : ''}
                        value={AppConstants.Sort_By_Labels.SORT_BY_NAME}
                        onClick={() => sortByNamePrice(AppConstants.Sort_By_Value.NAME)}
                    />
                </div>
                <div>
                    <input
                        className={AppConstants.Sort_By_Value.PRICE === sortBy.path ? 'active' : ''}
                        type='button'
                        value={AppConstants.Sort_By_Labels.SORT_BY_PRICE}
                        onClick={() => sortByNamePrice(AppConstants.Sort_By_Value.PRICE)}
                    />
                </div>
            </div>
        </div>
        <div className='hotel-list'>
            {data ? hotelList() : <div>Not found data!</div>}
        </div>
    </>;
};

export default HotelCard;
