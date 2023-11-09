import { Link } from "@tanstack/react-router";
import Crown from "@/assets/crown.png";
import { useCurrentUser } from "@/contexts/userContext";
import { signoutUser } from "@/utils/firebase";
import { CartIcon } from "@/components/cart/cartIcon";
import { CartDropDownMenu } from "@/components/cart/cartDropDownMenu";
import { IUserContext } from "@/types";
const Navbar = () => {
  const { state, setCurrentUser } = useCurrentUser() as IUserContext;
  const handleSignout = async () => {
    await signoutUser();
    setCurrentUser(null);
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to={"/"}>
          <img src={Crown} alt="logo" />
        </Link>
      </div>
      <ul className="nav__list list">
        <li className="list__item">
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li className="list__item">
          <Link to={"/contact"}>Contact</Link>
        </li>
        {state.currentUser ? (
          <li className="list__item" onClick={handleSignout}>
            Logout
          </li>
        ) : (
          <li className="list__item">
            <Link to={"/sign-in"}>Sign In</Link>
          </li>
        )}
        <li className="list__item">
          <Link to={"/cart"}>cart</Link>
        </li>
        <li className="list__item">
          <CartIcon />
        </li>
      </ul>
      <CartDropDownMenu />
    </nav>
  );
};

export default Navbar;
