import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders }); //url = url,headers = cryptoApiHeaders
//headers: Object { "X-RapidAPI-Key": "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a", "X-RapidAPI-Host": "coinranking1.p.rapidapi.com" }

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }), //baseUrl = baseUrl variable above
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"), //will make a request like  https://pokeapi.co/api/v2/pokemon/bulbasaur
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi; //creat a hook to get all data for the query above
//create a hook for getCryptos