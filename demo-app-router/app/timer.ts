export const createTimerPromise = (time: number, message: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
};
