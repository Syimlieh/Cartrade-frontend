import authReducer from "./authReducer";
import carInfo from "./carInfo";
import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage, 
    whiteList: ["auth"] //reducer we want to persist
}

const rootReducer = combineReducers({
    auth: authReducer,
    carInfo: carInfo
})

export default persistReducer(persistConfig, rootReducer);