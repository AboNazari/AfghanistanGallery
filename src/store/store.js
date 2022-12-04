import { configureStore } from "@reduxjs/toolkit";
import searchTermSlice from "./features/searchTermSlice";
import editDataSlice from "./features/editDataSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
    reducer: {
        searchTerm: searchTermSlice,
        editData: editDataSlice,
        auth: authSlice,
    }
})
