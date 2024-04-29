import {
  EnhancedStore,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authSlice from "./features/auth/authSlice";
import userSlice from "./features/user/userSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
  timeout: 100,
  whitelist: ["auth", "user"],
};

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const makeStore = () => {
  return store;
};

export const getPersistor = (store: EnhancedStore) => {
  return persistStore(store);
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = AppStore["dispatch"];
