import { apiSlice } from '../../../app/api/apiSlice'

export const clientApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Client'],
  endpoints: (builder) => ({
    client: builder.query({
      query: (id) => ({
        url: `/api/hdfc/getAllClient/${id}`,
        method: 'GET',
      }),
      providesTags: ['Client'],
      // keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useClientQuery,
} = clientApiSlice;
