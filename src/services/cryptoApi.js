import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const cryptoApiHeaders = {
    'X-RapidAPI-Key': '31e9c79c86mshe4747fa5bfc4d18p15a19djsn8a6c15467cd6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
   

}


const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        }),

       
    })
});


export const { useGetCryptosQuery, 
} = cryptoApi;
