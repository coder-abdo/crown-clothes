import { CategoryType, ICartItem } from "@/types";

export const categories: CategoryType[] = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

export const addToCartItems = (
  cartItems: ICartItem[],
  cartItem: ICartItem,
): ICartItem[] => {
  // if cart item is existed
  const existedCartItem = cartItems.find((item) => item.id === cartItem.id);
  if (existedCartItem) {
    return cartItems.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }

  // else
  return [...cartItems, { ...cartItem, quantity: 1 }];
};
// remove cart itme from cart
export const removeItem = (
  cartItems: ICartItem[],
  cartItem: ICartItem,
): ICartItem[] => {
  // if cart item is existed
  const existedCartItem = cartItems.find((item) => item.id === cartItem.id);
  if (existedCartItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== existedCartItem.id);
  }
  return cartItems.map((item) => {
    if (item.id === cartItem.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};
