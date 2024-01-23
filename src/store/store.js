import { configureStore } from "@reduxjs/toolkit";
import marketItemsSlice from "./marketItemsSlice";
import marketCartSlice from "./marketCartSlice";


export default configureStore({
    reducer:{
        marketItems: marketItemsSlice,
        marketCart : marketCartSlice
    }
})