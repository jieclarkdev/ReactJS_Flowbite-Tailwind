import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./src/pages/Authentication/AuthSlice/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice
    },
})