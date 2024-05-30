import { use } from 'react';
import { createTimerPromise } from './timer';

const short$ = createTimerPromise(2000, 'Short');

export function Short() {
  const message = use(short$);

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
