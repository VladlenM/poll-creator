import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PollItem } from '../types';

// Define a service using a base URL and expected endpoints
export const pollApi = createApi({
  reducerPath: 'pollApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6626a09d052332d553238268.mockapi.io/api/polls-vlad' }),
  endpoints: (builder) => ({
    createPoll: builder.mutation<PollItem, PollItem>({
      query: (body: PollItem) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
    getPolls: builder.query<PollItem[] | PollItem, number | null | undefined>({
      query: (id: number | null | undefined) => {
        let queryEndpoint = '';
        if (id) {
          queryEndpoint = `/${id}`;
        }
        return queryEndpoint;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreatePollMutation, useGetPollsQuery } = pollApi;
