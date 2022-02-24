import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1169651f57msh618d75a65128dfap1767bbjsnd606012fe114',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
  
//fetch data from rapid api
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      //access this /coins endpoint to get cryptos
      //we have to export this endpoint
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
    }),
});

export const {
    useGetCryptosQuery,
    // useGetCryptoDetailsQuery,
    // useGetExchangesQuery,
    // useGetCryptoHistoryQuery,
} = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '1169651f57msh618d75a65128dfap1767bbjsnd606012fe114'
//     }
//   };