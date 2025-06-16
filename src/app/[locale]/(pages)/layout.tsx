'use client';

import { Provider } from 'react-redux';

import { Suspense } from 'react';
import getStore from '@/shared/reducers/store';

const store = getStore();

export default function WebappLayout(props: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <Provider store={store}>
      <Suspense>{props.children}</Suspense>
    </Provider>
  );
}
