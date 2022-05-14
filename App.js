import ProductListPage from "./pages/ProductListPage.js"
import CartPage from "./pages/CartPage.js"
import ProductDetailPage from "./pages/ProductDetailPage.js"

export default function App({ $target }) {

    const processRoute = () => {
        const { pathname } = window.location;
        const [, , page, id] = pathname.split('/');

        if (pathname === '/web/') this.setState({ page: 'ProductListPage'});
        else if (page === 'products') this.setState({ page: 'ProductDetailPage', id});
        else if (page === 'cart') this.setState({ page: 'CartPage'});
        else this.setState({ page: 'unknown' });
    }

    this.state = {
        page: "ProductListPage",
        id: null,
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        }
        this.render();
    }

    this.render = () => {
        const {page} = this.state;
        if (page === 'ProductListPage') new ProductListPage({ 
            $target,
            initialState: {
                productList: [],
            },
            onClick : (productId) => {
                location.href = `/web/products/${productId}`;
            }
        });
        else if (page === 'ProductDetailPage') new ProductDetailPage({ 
            $target,
            initialState: {
                id: this.state.id,
                target: null,
                selectedOptions: [],
                totalPrice: 0,
            },
        });
        else if (page === 'CartPage' ) new CartPage({ 
            $target,
            initialState: {

            },
        });
    }
    processRoute();
};