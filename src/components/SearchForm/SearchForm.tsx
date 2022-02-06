import React from 'react';
import { AppConstants } from '../../appConstants';
import { SearchStatePropsTypes } from '../../types/state';
import './SearchForm.scss';

export const SearchForm = (props: SearchStatePropsTypes) => {
    return <div className='search-form-container'>
        <div>
            <span>
                {AppConstants.Search.FROM}
            </span>
            <input
                type='date'
                id='fromDate'
                name='from-date'
                value={props.fromDate}
                onChange={props.updateFromDate}
                min={AppConstants.Search.MIN_DATE}
                max={AppConstants.Search.MAX_DATE}
            />
        </div>
        <div>
            <span>
                {AppConstants.Search.TO}
            </span>
            <input
                type='date'
                id='toDate'
                name='to-date'
                value={props.toDate}
                onChange={props.updateToDate}
                min={props.fromDate}
                max={AppConstants.Search.MAX_DATE}
            />
        </div>
        <div>
            <input
                disabled={false}
                type='button'
                onClick={props.handleSearch}
                value={AppConstants.Search.BUTTON_TEXT}
            />
        </div>
        
    </div>;
}

