import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchReducer from "./search";
import genresReducer from "./genres";
import watcherSaga from "../sagas";
import moviesReducer from "./movies";
import movieReducer from "./movie";
import { userApi } from "../lib/userApi";
import { authApi } from "../lib/authApi";
import userSlice from "../lib/userSlice";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        userState: userSlice,
        search: searchReducer,
        genres: genresReducer,
        movies: moviesReducer,
        movie: movieReducer
    },

    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ think: false }).prepend(sagaMiddleware).concat(
            authApi.middleware,
            userApi.middleware
          );
    }
});

sagaMiddleware.run(watcherSaga);

export default store; 