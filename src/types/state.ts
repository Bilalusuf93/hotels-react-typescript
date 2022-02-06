
 export interface ApiError {
    hasError: boolean;
    messsage?: string;
}

export interface GenericApiResponse<T> {
    status: number;
    data: T;
}

export interface Hotel {
    name: string;
    price: string;
    city: string;
    available_on: string;
    totalNights?: number;
}


export interface Sort {
    path: string;
    order: 'asc' | 'desc' | '';
}

export interface HotelsCard {
    hotelList: Hotel[];
    sortBy: Sort;
    totalNights: number;
    sortByNamePrice(sortBy: string): void;

}
export interface INotFound {
    message?: string
}

export interface Refiners {
    minPrice: Number;
    maxPrice: Number;
    searchQuery: string;
    price?: number;
    updateRefiner(event: React.ChangeEvent<HTMLInputElement>, name: string): void
}

export interface SearchStatePropsTypes {
    fromDate: string;
    toDate: string;
    updateFromDate?(event: React.ChangeEvent<HTMLInputElement>): void;
    updateToDate?(event: React.ChangeEvent<HTMLInputElement>): void;
    handleSearch?(): void;
}