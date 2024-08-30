import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";
import Cart from "../store/components/Cart";
import CheckOut from "../store/components/CheckOut";

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Cart />
      <CheckOut />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
