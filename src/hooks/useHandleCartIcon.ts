import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { useCallback } from "react";

export const useHandleCartIcon = () =>{
const { setIsOpen, isOpen, cartCount } = useToggleCartMenu();
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);
  return {
   toggleMenu,
  cartCount
  }
}
