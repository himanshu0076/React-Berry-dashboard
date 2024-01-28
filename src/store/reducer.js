// third-party
import { combineReducers } from 'redux';

// project imports
import snackbarReducer from './slices/snackbar';
import menuReducer from './slices/menu';
import listingReducer from './reducer/listing';
import validationReducer from './reducer/validation';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    snackbar: snackbarReducer,
    menu: menuReducer,
    listing: listingReducer,
    validation: validationReducer
});

export default reducer;
