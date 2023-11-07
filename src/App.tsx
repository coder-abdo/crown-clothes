import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "@/components/outlet";
import Home from "@/pages/home";
import ErrorPage from "@/pages/errorPage";
import Shop from "@/pages/shop";
import Auth from "@/pages/auth";
import UserProvider from "@/contexts/userContext";
import CategoriesProvider from "@/contexts/shopContext";
import CartMenuProvider from "@/contexts/cartDropDownMenuContext";
import Checkout from "@/pages/checkout";
import { Category } from "@/pages/shop/category";
function App() {
  return (
    <UserProvider>
      <CategoriesProvider>
        <CartMenuProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="sign-in" element={<Auth />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="shop/" element={<Shop />}>
                  <Route path=":category" element={<Category />} />
                </Route>
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </CartMenuProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}

export default App;
