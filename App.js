// import { getData } from "./api.js";
import CartPage from "./pages/CartPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import ProductListPage from "./pages/ProductListPage.js";

export default function App({ $target }) {
  this.state = {};
  this.route = () => {
    const { pathname } = location;
    console.log(pathname);
    //   console.log(window.location.pathname);
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    //update component's data
  };

  this.route();

  // comp
  const listPage = new ProductListPage({ $target });
  const detailPage = new ProductDetailPage({ $target });
  const cartPage = new CartPage({ $target });
}
