import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
  baseUrl: 'https://media.techtist.com:3000/',
  prepareHeaders: (headers, { getState }) => {
    headers.set('Content-Type', 'application/json');
    // multipart/form-data; boundary=<calculated when request is sent></calculated>
    // headers.set('Content-Type', 'multipart/form-data');
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
    