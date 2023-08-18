import { useCallback, useEffect } from "react";

export default function Debounce (fn, delay, deps){
  const callback = useCallback(fn, deps);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};