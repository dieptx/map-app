import React from "react";

function useTimeInterval(callback: (() => void) | undefined, delay: number) {
  const savedCallback = React.useRef<() => void | undefined>();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setInterval(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);
    return () => clearInterval(timer);
  }, [delay]);
}

export { useTimeInterval };
