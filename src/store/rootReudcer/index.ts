import { combineReducers } from "redux";
import { userReducer } from "@/store/user/userReducer";
import { categoryReducer } from "@/store/categories/categoriesReducer";
import { cartReducer } from "@/store/cart/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});
