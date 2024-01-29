// import { apiSlice } from '../../../app/api/apiSlice'

// export const clientCampApiSlice = apiSlice.injectEndpoints({
//     // tagTypes: ['ClientCamp'],
//     endpoints: (builder) => ({
//         clientCamp: builder.query({
//             query: (data) => ({
//                 url: '/api/hdfc/getClientDetails',
//                 method: 'GET',                
//             }),          
//         }),
//     }),
// });

// export const { 
//     useGetClientCampQuery,
//     endpoints: { clientCamp },
// } = clientCampApiSlice;


import { apiSlice } from '../../../app/api/apiSlice';

export const clientsApiSlice = apiSlice.injectEndpoints({
    // tagTypes: ['Team', 'TeamsTask'],
    tagTypes: ['Client'],
    endpoints: (builder) => ({
        clients: builder.query({
            query: (campKey) => ({
                url: `/api/hdfc/getClientDetails/${campKey}`,
                method: 'GET',
            }),
            providesTags: ['Client'],
        })
    }),
});

export const {
    useClientsQuery,
} = clientsApiSlice;
