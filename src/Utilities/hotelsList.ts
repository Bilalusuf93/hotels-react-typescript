import moment from "moment";
import { Hotel } from "../types/state";

export const filterByDate = (hotels: Hotel[], fromDate: string, toDate: string) => {
    return hotels.filter((hotel: Hotel) => hotel.available_on >= fromDate && hotel.available_on <= toDate)
}

export const filterByName = (hotels: Hotel[], query: string) => {
    return query && query.trim().length >= 1 ? (hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(query.trim().toLowerCase()))) : hotels;
}

export const filterByPrice = (hotels: Hotel[], price: Number, totalNights: number) => {
    return price && price  ? (hotels.filter(hotel => parseInt(hotel.price) * totalNights >= price)) : hotels
}

export const getMaxPrice = (hotels: Hotel[]) => {
    return hotels.reduce((prev, next) => parseInt(next.price) <= parseInt(prev.price) ? prev : next);
}
export const getMinPrice = (hotels: Hotel[]) => {
    return hotels.reduce((prev, next) => parseInt(next.price) >= parseInt(prev.price) ? prev : next);
}

export const getNumberOfNight = (
    fromDate: string,
    toDate: string
  ): number => {
    return moment(toDate).diff(
      moment(fromDate),
      'days'
    );
  };