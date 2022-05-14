import { getProductsList } from "/web/api.js";

export default function ProductListPage({ $target, initialState, onClick }) {
    this.$element = document.createElement('div');
    this.$element.className = "ProductListPage";
    $target.appendChild(this.$element);
    this.$title = '<h1>상품목록</h1>'
    this.state = initialState;

    const handleClick = ({ target }) => {
      const { productList } = this.state;
      const product = target.closest(".Product");
      if (!product) return;
      const { productId } = product.dataset;
      onClick(productId);
    };

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        }
        this.render();
    }

    this.render = () => {
      const {productList} = this.state;
        const contentsList = `
        <ul>
          ${productList.map((e) => 
            {
              return `
              <li class="Product" data-product-id=${e.id}>
                <img src="${e.imageUrl}">
                <div class="Product__info">
                  <div>${e.name}</div>
                  <div>${e.price.toLocaleString()}원~</div>
                </div>
              </li>
              `
          }).join('')}
        </ul>
        `;
       this.$element.innerHTML = this.$title + contentsList;

    }

    getProductsList({setState: this.setState});
    this.$element.addEventListener("click", handleClick);
};

{/* <div class="ProductListPage">
<h1>상품목록</h1>
<ul>
  <li class="Product">
    <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
    <div class="Product__info">
      <div>커피잔</div>
      <div>10,000원~</div>
    </div>
  </li>
  
</ul>
</div> */}