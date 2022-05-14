import ProductListPage from "./pages/ProductListPage.js"
import CartPage from "./pages/CartPage.js"
import ProductDetailPage from "./pages/ProductDetailPage.js"
import { goTo } from "./router.js";

export default function App({ $target }) {

    this.state = {
        id: -1,
        page: "",
    };

    this.processRoute = () => {
        const { pathname } = window.location;
        const [, , page, id] = pathname.split('/');
        console.log('process route');

        if (pathname === '/web/') {
            console.log('web');
            productListPage.init();
            this.setState({ page: 'productListPage'});
        } else if (page === 'products' && id) {
            console.log('products');
                // productDetailPage.init();
                this.setState({ page: 'productDetailPage', id});
        } else if (page === 'cart' ) {
            console.log('cart');
                // cartPage.render();
                this.setState({ page: 'cartPage'});
        } else {
             alert('잘못된 경로입니다.')
        }
    }

    // 컴포넌트 생성

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        }
        productListPage.setState({ 
            display: this.state.page === "productListPage"
        });
        productDetailPage.setState({ 
            display: this.state.page === "productDetailPage",
            id: this.state.id,
        });
        cartPage.setState({ 
            display: this.state.page === "cartPage"
        });
    }


    const productListPage = new ProductListPage({ 
        $target,
        initialState: {
            display: true,
            productList: [],
        },
        onClick : (productId) => {
            goTo(`/web/products/${productId}`);
        }
    });

    const productDetailPage = new ProductDetailPage({ 
        $target,
        initialState: {
            display: false,
            id: this.state.id,
            target: null,
            selectedOptions: [],
            totalPrice: 0,
        },
    });

    const cartPage = new CartPage({ 
        $target,
        initialState: {
            display: false,
        },
    })

    window.addEventListener('route_change', this.processRoute);
    this.processRoute();
};