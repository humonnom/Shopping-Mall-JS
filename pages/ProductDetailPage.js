import { getData } from "/web/api.js";

export default function ProcuctDetailPage({ $target, initialState }) {
    this.$element = document.createElement('div');
    this.$element.className = "ProcuctDetailPage";
    $target.appendChild(this.$element);
    
    this.state = initialState;

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        }
        this.render();
    }

    const onSelect = ({ target }) => {
      const { selectedOptions } = this.state;
      const { selectedIndex } = target.options;
      console.log(selectedOptions);
      console.log(selectedIndex);
      const order = selectedIndex - 1;
      if (!selectedOptions.includes(order)) {
        this.setState({ selectedOptions: selectedOptions.concat(order)});
      }
    }

    const setEvents = () => {
      const $select = (this.$element.querySelector('select'));
      $select.addEventListener('change', onSelect);
    }

    this.render = async () => {
        console.log('init');
        const { id, totalPrice, selectedOptions, display } = this.state;
        const target = await getData(id);
        this.$element.style.display = (display) ? "block" : "none";
        if (display){
          console.log(target)
        const title = `<h1>${target.name} 상품 정보</h1>`
        const contentsList = `
         <div class="ProductDetail">
          <img src="${target.imageUrl}">
          <div class="ProductDetail__info">
            <h2>${target.name}</h2>
            <div class="ProductDetail__price">${target.price.toLocaleString()}원~</div>
            <select>
              <option>선택하세요.</option>
              ${target.productOptions.map((option) => {
                return `
                  <option>${option.name}</option>
                `;
              })}
            </select>
            <div class="ProductDetail__selectedOptions">
              <h3>선택된 상품</h3>
              <ul>
                ${selectedOptions.map((index) => {
                  const e = target.productOptions[index];
                  return `
                    <li>
                      ${e.name} ${e.price.toLocaleString()}원 <div><input type="number" value="10">개</div>
                    </li>
                  `;
                })}
              </ul>
              <div class="ProductDetail__totalPrice">${totalPrice.toLocaleString()}원</div>
              <button class="OrderButton">주문하기</button>
            </div>
          </div>
        </div>
        `;
        this.$element.innerHTML = title + contentsList;
        setEvents();
        }
      }

    

};

// <li>
//               커피잔 100개 번들 10,000원 <div><input type="number" value="10">개</div>
//             </li>
//             <li>
//               커피잔 1000개 번들 15,000원 <div><input type="number" value="5">개</div>
//             </li>
