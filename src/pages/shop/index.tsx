import { ShopProducts } from "@/components/shop/shopProducts";
import { useShopProducts } from "@/contexts/shopContext";

function Shop() {
  const { shopProducts } = useShopProducts();
  console.log("shop page");
  return <ShopProducts products={shopProducts} />;
}

export default Shop;
