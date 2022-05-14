export default function CartPage({ $target, initialState }) {
    this.$element = document.createElement('div');
    this.$element.className = "CartPage";
    $target.appendChild(this.$element);
    this.$title = '<h1>장바구니</h1>'
    this.state = initialState;

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        }
        this.render();
    }

    this.render = () => {
      const { display } = this.state;
      this.$element.style.display = (display) ? "block" : "none";
        if (display){
        const contentsList = `
          <div class="Cart">
            <ul>
              <li class="Cart__item">
                  <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
                  <div class="Cart__itemDesription">
                    <div>커피잔 1000개 번들 15,000원 5개</div>
                    <div>75,000원</div>
                  </div>
              </li>
            </ul>
            <div class="Cart__totalPrice">
              총 상품가격 175,000원
            </div>
            <button class="OrderButton">주문하기</button>
          </div>
        `;
        this.$element.innerHTML = this.$title + contentsList;
        }
    }
};