import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getItems: builder.query({
            query: () => '/items',
            providesTags: ['items'],
        }),
    }),
});

export const { useGetItemsQuery } = apiSlice;

export default apiSlice.reducer;
