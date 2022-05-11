export default function CartPage({ $target, initialValue }) {
  const $element = document.createElement("div");
  $element.className = "CartPage";
  $target.appendChild($element);

  // state
  this.state = initialValue;

  //method
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    this.render();
  };

  this.render = () => {
    $element.innerHTML = `<p>cart page</p>`;
  };

  this.render();
}

{
  /* <div class="CartPage">
        <h1>장바구니</h1>
        <div class="Cart">
          <ul>
            <li class="Cart__item">
              <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
              <div class="Cart__itemDesription">
                <div>커피잔 100개 번들 10,000원 10개</div>
                <div>100,000원</div>
              </div>
            </li> => li 여러개
          </ul개
          <div class="Cart__totalPrice">
            총 상품가격 175,000원
          </div>
          <button class="OrderButton">주문하기</button>
        </div>
      </div> */
}
