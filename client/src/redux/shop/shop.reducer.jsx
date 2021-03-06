import userActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case (userActionTypes.FETCH_COLLECTIONS_START): 
      return {
        ...state,
        isFetching: true
      }
    case (userActionTypes.FETCH_COLLECTIONS_SUCCESS):
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }
    case (userActionTypes.FETCH_COLLECTIONS_FAILURE):
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  };
};

export default shopReducer;