import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { ICartMenuContext } from "@/types";
import { useCallback } from "react";

export const useHandleCartIcon = () => {
  const { setIsOpen, isOpen, cartCount } =
    useToggleCartMenu() as ICartMenuContext;
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);
  return {
    toggleMenu,
    cartCount,
  };
};
