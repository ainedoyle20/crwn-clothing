import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections 
);

export const selectCollectionsForShop = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollectionPageCollection = memoize((collectionUrlParam) => {
  return createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
});
  