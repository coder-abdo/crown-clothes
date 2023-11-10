import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "@/store/rootReudcer";

export const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(logger)),
);

export type AppDispatch = typeof store.dispatch;
