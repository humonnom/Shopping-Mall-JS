import { getData } from "/web/api.js";

export default function ProductListPage({ $target, initialState, onClick }) {
    this.$element = document.createElement('div');
    this.$element.className = "ProductListPage";
    $target.appendChild(this.$element);
    this.$title = '<h1>상품목록</h1>'
    this.state = initialState;

    const handleClick = ({ target }) => {
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

    this.render = async () => {
      const { productList, display } = this.state;
      this.$element.style.display = (display) ? "block" : "none";

      if (display){
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
    }

    this.init = async () => {
      const data = await getData();
      this.setState({ productList: data });
      this.$element.addEventListener("click", handleClick);
      this.render();
    }
};