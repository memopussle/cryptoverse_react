import { configureStore } from "@reduxjs/toolkit"; 

import { cryptoApi } from '../services/cryptoApi'; 
import { cryptoNewsApi } from "../services/cryptoNewsApi";

//simply store state/component

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer, //point to cryptoApi.reducerPath
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer
    },

})