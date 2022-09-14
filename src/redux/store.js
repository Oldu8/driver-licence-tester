import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import testCounterReducer from "./testCounterSlice.js";
import testArrReducer from "./testArrSlice.js";

const persistConfig = {
    key: "root",
    storage,
};
const rootReducer = combineReducers({
    userData: testCounterReducer,
    testArr: testArrReducer,
});

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store);
