import { combineReducers } from 'redux';

import userReducer from './user/user.reducers';
import cartReducer from './cart/cart.reducers';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});


export default rootReducer;