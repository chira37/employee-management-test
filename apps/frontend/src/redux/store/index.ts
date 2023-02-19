import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import employeeReducer, { getEmployees, resetFilter, setFilter } from "../slices/employeeSlice";

const filterMiddleware = createListenerMiddleware();
filterMiddleware.startListening({
  actionCreator: setFilter,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(getEmployees(1));
  },
});

filterMiddleware.startListening({
  actionCreator: resetFilter,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(getEmployees(1));
  },
});

export function makeStore() {
  return configureStore({
    reducer: {
      employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(filterMiddleware.middleware),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
