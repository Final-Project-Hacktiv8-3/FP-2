import {
    combineReducers,
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';

import thunk from 'redux-thunk';
import productReducer from './products/reducer';
import addCartReducer from './adding/reducer';
import addRekapanReducer from './rekapan/reducer';
import latestProducerReducer from './latest/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    products: productReducer,
    addChart:addCartReducer,
    rekapan:addRekapanReducer,
    latestUpdate:latestProducerReducer
  });

  const store = createStore(
    rootReducers,
    composerEnhancer(applyMiddleware(thunk))
  );
  
  export default store;