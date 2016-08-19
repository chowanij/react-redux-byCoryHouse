import {create, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutabel-state-invariant';

export default function configureStore(initialState) {
  return createStore(
   rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
