'use client';

import { Suspense } from 'react';
import { Short } from './short';
import { Long } from './long';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<h1 style={{ fontSize: '30px', color: 'red' }}>loading short......</h1>}>
        <Short />
      </Suspense>

      <Suspense fallback={<h1 style={{ fontSize: '30px', color: 'blue' }}>loading long......</h1>}>
        <Long />
      </Suspense>
    </main>
  );
}
