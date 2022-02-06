import http, { apiHeaders } from "./http";
import { Hotel, GenericApiResponse } from "../types/state";
const apiUrl = '/48244d7b-52e9-4b5f-b122-bd763e53fa5c'

export function getHotels() {
    return http.get<
        GenericApiResponse<Hotel[]>
    >(apiUrl, {
        headers: apiHeaders
    });
}