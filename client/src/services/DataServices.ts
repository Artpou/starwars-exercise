import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from "../components";
import http from "../config/http-common";
import { StarWarsData } from "../types";


export function fetchData(id: string, type: string) {
  return async (dispatch: any) => {
    dispatch(fetchDataStart());

    http.get<StarWarsData>(`/${type}/${id}`).then((res) => {
      dispatch(fetchDataSuccess(res.data));
    }).catch((err) => {
      dispatch(fetchDataFailure(err.message));
    });
  }
}

export const dataTypes = [
  'all',
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles',
];