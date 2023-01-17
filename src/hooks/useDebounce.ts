import { useEffect, useState } from 'react';

interface DebounceProps {
  value: string | number;
  delay?: number;
}
export default function useDebounce({ value, delay = 500 }: DebounceProps) {
  const [debounceVal, setDebounceVal] = useState<any>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceVal;
}
