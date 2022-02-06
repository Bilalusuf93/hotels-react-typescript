import { toNumber } from 'lodash';
import React from 'react';
import { AppConstants } from '../../appConstants';
import { Hotel } from '../../types/state';
import '../CardDetails/CardDetails.scss';

export const CardDetails = (hotel: Hotel) => {
  const finalPrice = hotel.totalNights ? (hotel?.totalNights * toNumber(hotel?.price)) : toNumber(hotel?.price);
  return <div className='card-details'>
    <div className='hotel-name'>
      <span>
        {AppConstants.Hotel_Details.NAME}
      </span>
      {hotel.name}
    </div>
    <div className='hotel-price'>
      <span>
        {AppConstants.Hotel_Details.PRICE}
      </span>
      {`${finalPrice}${AppConstants.Hotel_Details.CURRENCY_CODE}`}
    </div>
    <div className='hotel-city'>
      <span>
        {AppConstants.Hotel_Details.CITY}
      </span>
      {hotel.city}
    </div>
  </div>;
};
