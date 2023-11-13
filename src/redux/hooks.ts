import { useSelector as selectorHook, TypedUseSelectorHook, useDispatch as dispatchHook } from "react-redux";
import { RootState, AppDispatch } from "./types";

// export const useAppDispatch = dispatchHook<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;