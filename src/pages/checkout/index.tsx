import { CheckoutItems } from "@/components/chekcout/checkoutItems";
import { useAppSelector } from "@/hooks/redux";
import { useCart } from "@/hooks/useCart";

const Checkout = () => {
  const { totalCartPrice } = useCart();
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    <main className="checkout">
      <h1 className="checkout__title">check out</h1>
      {cartItems.length > 0 ? (
        <section className="checkout__table">
          <header className="checkout__header header">
            <h4 className="header__title">product</h4>
            <h4 className="header__title">description</h4>
            <h4 className="header__title">quantity</h4>
            <h4 className="header__title">price</h4>
            <h4 className="header__title">remove</h4>
          </header>
          <CheckoutItems items={cartItems} />
          <footer className="checkout__total total">
            <span className="total__description">Total</span>
            <span className="total__price">&#65284;{totalCartPrice}</span>
          </footer>
        </section>
      ) : (
        <section className="checkout-item__empty">no items yet</section>
      )}
    </main>
  );
};

export default Checkout;
