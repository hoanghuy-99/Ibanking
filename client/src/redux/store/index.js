import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
};
export default configureStore;