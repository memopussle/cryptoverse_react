import { configureStore } from "@reduxjs/toolkit"; 

import { cryptoApi } from '../services/cryptoApi'; 

//simply store state/component

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer, //point to cryptoApi.reducerPath
    },

})