import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { reducer } from "./todos/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer
});

//middleawares
const logger = (state) => (next) => (action) => {
  console.log("dispatching action", action, next, state);
  const val = next(action);
  console.log("exiting logger", val);
  return val;
  // return next( action)    //done with our middlewares we type next
};

const logger2 = (state) => (next) => (action) => {
  console.log("dispatching action2", action, next, state);
  const val = next(action);
  console.log("exiting logger2", val);
  return val;
  // return next( action)    //done with our middlewares we type next
};

const composeEnhancers =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger, logger2)
  // other store enhancers if any
);

export const store = createStore(
  rootReducer,
  // applyMiddleware(logger,logger2)
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());
