import { use } from 'react';
import { createTimerPromise } from './timer';

const long$ = createTimerPromise(5000, 'Long');

export function Long() {
  const message = use(long$);

  return (
    <p>
      {typeof message === 'string' ? (
        <p style={{ fontSize: '30px', color: 'green' }}>{message}</p>
      ) : (
        <p>something went wrong</p>
      )}
    </p>
  );
}
