import { RootState, TypedDispatch } from "@/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = useDispatch<TypedDispatch<RootState>>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
