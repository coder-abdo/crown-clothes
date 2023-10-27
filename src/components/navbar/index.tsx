import { Link, NavLink } from "react-router-dom";
import Crown from "@/assets/crown.png";
import { useCurrentUser } from "@/contexts/userContext";
import { signoutUser } from "@/utils/firebase";
const Navbar = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();
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
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li className="list__item">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        {currentUser ? (
          <li className="list__item" onClick={handleSignout}>
            Logout
          </li>
        ) : (
          <li className="list__item">
            <NavLink to={"/sign-in"}>Sign In</NavLink>
          </li>
        )}
        <li className="list__item">
          <NavLink to={"/cart"}>cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
