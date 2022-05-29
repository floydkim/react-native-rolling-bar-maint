// by Dan Abramov
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useRef, useEffect } from 'react';

// TODO: TS migration and remove AllowJS option in tsconfig.json
export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
