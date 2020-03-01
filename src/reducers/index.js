import { combineReducers } from 'redux';

import { featuresReducer } from './featuresReducer';
import { totalPriceReducer } from './totalPriceReducer';

export const rootReducer = combineReducers({
    featuresReducer,
    totalPriceReducer
});