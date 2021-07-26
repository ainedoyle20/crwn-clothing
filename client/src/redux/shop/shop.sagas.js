import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToObject } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
  const collectionRef = yield firestore.collection('collections');
  const snapshot = yield collectionRef.get();
  const collectionsMap = yield call(convertCollectionsSnapshotToObject, snapshot);
  yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  };
};

export function* fetchCollectionsStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
};