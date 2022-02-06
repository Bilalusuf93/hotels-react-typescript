import React from 'react';
import { AppConstants } from '../../appConstants';

import searchIcon from '../icons/search-icon.svg';
import { Refiners } from '../../types/state';
import './HotelRefiners.scss';
export const HotelRefiners = (props: Refiners) => {
    const { updateRefiner, minPrice, maxPrice, searchQuery, price } = props;
    return (
        <div className='refiner-section'>
            <div>
                <img src={searchIcon} alt='Search Icon' />
                <input
                    type='text'
                    name='search-refiner'
                    id='search-refiner'
                    value={searchQuery}
                    placeholder={AppConstants.Hotel_Filters.SEARCH_PLACE_HOLDER}
                    onChange={(e) => (
                        updateRefiner(e, AppConstants.Hotel_Filters.NAME)
                    )}
                />
            </div>

            <div>
                <input
                    type='range'
                    name='price-refiner'
                    id='price-refiner'
                    step='1'
                    value={price || 0}
                    min={minPrice.toString()}
                    max={maxPrice.toString()}
                    onChange={(e) => (
                        updateRefiner(e, AppConstants.Hotel_Filters.PRICE)
                    )}
                />
                <output name="rangeVal">
                    {price}{AppConstants.Hotel_Details.CURRENCY_CODE}
                </output>
            </div>
        </div>
    )
}

