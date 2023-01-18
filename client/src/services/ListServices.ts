import http from "../config/http-common";
import { StarWarsData } from "../types";

import { 
  fetchListFailure,
  fetchListStart,
  fetchListSuccess
} from '../components';

export function fetchList(name: string = '', type: string = 'all') {
  return async (dispatch: any) => {
    dispatch(fetchListStart());

    http.get<StarWarsData[]>(`?name=${name}&type=${type}`).then((res) => {
      dispatch(fetchListSuccess(res.data));
    }).catch((err) => {
      dispatch(fetchListFailure(err.message));
    });
  }
}
  