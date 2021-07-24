import shopActionTypes from './shop.types';

export const fetchCollections = (obj) => ({
  type: shopActionTypes.FETCH_COLLECTIONS,
  payload: obj
});