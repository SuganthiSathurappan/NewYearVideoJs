import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://dev-api.dakshamentors.com',
//   prepareHeaders: (headers, { getState }) => {
//     headers.set('Content-Type', 'application/json');
//     // multipart/form-data; boundary=<calculated when request is sent></calculated>
//     // headers.set('Content-Type', 'multipart/form-data');
//     return headers;
//   },
// });

// export const apiSlice = createApi({
//   baseQuery: baseQuery,
//   endpoints: (builder) => ({}),
// });
