import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useEffect, useState } from "react";
import type { RootState, AppDispatch } from "./redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debouncedValue;
};
