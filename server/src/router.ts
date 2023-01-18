import * as bcrypt from 'bcrypt';

import { StarWarsCategories } from "./utils/starWarsCategories";
import { getWithId, getWithTypes } from "./utils/starWarsRequest";

export const router = [
  {
    method: 'GET',
    path: '/',
    handler: async (request: any, h: any) => {
      let data: any[] = [];
      let types = StarWarsCategories;

      if (
        request.query.type &&
        request.query.type !== 'all' && 
        request.query.type !== ''
      ) {
        types = [request.query.type];
      }

      for (const type of types) {
        data = data.concat(await getWithTypes(type, request.query.name));
      }

      return data;
    },
  },
  {
    method: 'GET',
    path: '/{type}',
    handler: async (request: { params: { type: string; }; }, h: any) => {
      const { type } = request.params;

      if (!StarWarsCategories.includes(type)) {
        return h.response().code(404);
      }

      return await getWithTypes(type);
    },
  },
  {
    method: 'GET',
    path: '/{type}/{id}',
    handler: async (request: { params: { type: string; id: string; }; }, h: any) => {
      const { type, id } = request.params;

      if (!StarWarsCategories.includes(type)) {
        return h.response().code(404);
      }

      return await getWithId(type, id);
    }
  }
];