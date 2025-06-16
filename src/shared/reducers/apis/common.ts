/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { setLogoutState } from '@/shared/reducers/states';

export const baseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    timeout: 10000,
    credentials: 'include',
  });

export const fetchAuthBaseQuery =
  (baseUrl: string) => async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    const result = await baseQuery(baseUrl)(args, api, extraOptions);

    if (result.error?.status === 401 || result.error?.status === 403) {
      api.dispatch(setLogoutState());
    }

    return result;
  };

export const getError = (error: any): { title: string; message: string } => {
  const message = error?.data?.code || error?.data?.error || error?.data || error?.error || error?.message || error;

  if (typeof message === 'object') {
    return message[0];
  }

  return { title: `${message}-title`, message };
};
