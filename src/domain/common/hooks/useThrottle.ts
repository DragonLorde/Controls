import { useCallback, useState } from 'react';

export const useThrottle = <T>(callback: (...args: T[]) => void, delay: number) => {
  const [ready, setReady] = useState(true);

  return useCallback(
    (...args: any[]) => {
      if (!ready) return;

      callback?.(...args);
      setReady(false);

      setTimeout(() => setReady(true), delay);
    },
    [ready, callback, delay],
  );
};
