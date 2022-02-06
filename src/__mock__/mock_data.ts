import { Hotel, Sort } from "../types/state"


export const mockInitialState = {
    fromDate: '',
    toDate: '',
}
export const mockInitialDataRefiners = {
    minPrice: 0,
    maxPrice: 0,
    searchQuery: 'Kempinski Hotel',
    price: 0,
}
export const mockInitialDataHotelCard = {
    hotelList: [
        {
            name: "Kempinski Hotel Mall of the Emirates",
            price: "200",
            city: "dubai",
            available_on: "2022-10-21"
        },
        {
            name: "Address Dubai Mall",
            price: "250",
            city: "dubai",
            available_on: "2022-08-15"
        }
    ],
    sortBy: {
        path: 'name',
        order: 'asc'
    } as Sort,
    totalNights: 50
}

export const mockInitialDataCardDetails = {

    name: "Kempinski Hotel Mall of the Emirates",
    price: "200",
    city: "dubai",
    available_on: "2022-10-21"

} as Hotel
