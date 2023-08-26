import { useDispatch, useSelector } from "react-redux";

export function useAppSelector(selector) {
  return useSelector(selector);
}

export function useAppDispatch() {
  return useDispatch();
}
