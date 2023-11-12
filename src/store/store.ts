import { Middleware, applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "@/store/rootReudcer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const middlewares = [import.meta.env.DEV && logger].filter(
  (middleware): middleware is Middleware => Boolean(middleware),
);
const composeEnhacer =
  (import.meta.env.DEV &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const persistantReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeEnhacer(applyMiddleware(...middlewares));
export const store = createStore(
  persistantReducer,
  undefined,
  composeEnhancers,
);
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
