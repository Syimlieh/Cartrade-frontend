import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";
import index from "./reducer/index";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

export const store = createStore(index, applyMiddleware(...middleware));
export const persistor = persistStore(store);