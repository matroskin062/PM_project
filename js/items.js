const items = () => {
  const newItems = ITEMS.filter((el) => el.type === 'new').sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const recommendedItems = ITEMS.filter((el) => el.type === 'recommended').sort(
    (a, b) => a.price - b.price
  );

  const saleItems = ITEMS.filter((el) => el.type === 'sale').sort(
    (a, b) => a.price - a.oldPrice - (b.price - b.oldPrice)
  );

  if (!newItems.length) {
    document.querySelector('.new-items').style.display = 'none';
  }
  if (!recommendedItems.length) {
    document.querySelector('.recommend').style.display = 'none';
  }
  if (!saleItems.length) {
    document.querySelector('.sale').style.display = 'none';
  }
  const createItem = (el) => {
    const currencies = {
      RUB: 'р.',
      UAH: 'грн.',
      USD: '$',
    };
    const convert = (amount, currency) => {
      let result;
      if (currency !== CURRENCY && CURRENCY === 'UAH') {
        result = amount * CURRENCY_EXCHANGE[currency];
      } else if (currency === CURRENCY) {
        result = amount;
      } else {
        if (currency === 'UAH') result = amount / CURRENCY_EXCHANGE[CURRENCY];
        else
          result =
            (amount * CURRENCY_EXCHANGE[currency]) /
            CURRENCY_EXCHANGE[CURRENCY];
      }
      return parseInt(result);
    };
    const price = convert(el.price, el.currency);
    const oldPrice = convert(el.oldPrice, el.currency);

    return `
      <div class="card">
        <div class="crd-label ${el.type}-label"></div>
        <div class="crd-img">
         
        </div>
        <a href=${el.url} class="crd-link"
          >${el.description}</a>
        <p class="crd-price">
         ${
           price && oldPrice
             ? `Цена:
          <strong>${price} ${currencies[CURRENCY]}</strong>
          <del>${oldPrice} ${currencies[CURRENCY]}</del>`
             : '<strong>Нет в наличии</strong>'
         }
        </p>
        <div class="crd-buy ${price && oldPrice ? '' : 'disabled'}" ${
      price && oldPrice ? `onclick='addToCart(${price})'` : ''
    }>КУПИТЬ</div>
        <a class="crd-more" href=${el.url}>Подробнее</a>
      </div>
    `;
  };

  const renderProducts = (target, data) => {
    target.innerHTML = '';
    data.map((el) => {
      if (el.type && el.date && el.url && el.currency)
        target.innerHTML += createItem(el);
    });
  };
  renderProducts(document.querySelector('.new-items .crd-view'), newItems);
  renderProducts(
    document.querySelector('.recommend .crd-view'),
    recommendedItems
  );

  renderProducts(document.querySelector('.sale .crd-view'), saleItems);

  document.querySelectorAll('.crd-img').forEach((el, i) => {
    console.log(i);
    if (ITEMS[i]?.img) {
      el.style.backgroundImage = `url(${ITEMS[i].img})`;
    } else {
      el.style.backgroundImage = `url('/img/no-image-icon-23499.png')`;
    }
  });

  const cardSlider = document.querySelectorAll('.cards-slider-for-js'); // Ищет все блоки нуждающиеся в слайдере

  let maxContent =
    document.body.clientWidth < 522
      ? 1
      : document.body.clientWidth < 782
      ? 2
      : document.body.clientWidth < 1128
      ? 3
      : 4;

  cardSlider.forEach((el) => slider(el));

  function slider(card_slider) {
    const prevBtn = card_slider.querySelector('.crd-prev');
    const nextBtn = card_slider.querySelector('.crd-next');
    const prevMin = card_slider.querySelector('.min-prev');
    const nextMin = card_slider.querySelector('.min-next');
    const cards = card_slider.querySelectorAll('.card');
    prevBtn.classList.add('disabled');
    prevMin.classList.add('dmb');

    let curIdx = 0;

    if (cards.length <= maxContent) {
      nextBtn.classList.add('disabled');
      nextMin.classList.add('dmb');
    }
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    nextMin.addEventListener('click', next);
    prevMin.addEventListener('click', prev);

    function next() {
      if (curIdx >= cards.length - maxContent) return;
      prevBtn.classList.remove('disabled');

      prevMin.classList.remove('dmb');
      curIdx++;
      changeSlide();
      if (curIdx >= cards.length - maxContent) {
        nextBtn.classList.add('disabled');
        nextMin.classList.add('dmb');
      }
    }

    function prev() {
      if (curIdx <= 0) return;
      nextBtn.classList.remove('disabled');
      nextMin.classList.remove('dmb');
      curIdx--;
      changeSlide();
      if (curIdx <= 0) {
        prevMin.classList.add('dmb');
        prevBtn.classList.add('disabled');
      }
    }

    function changeSlide() {
      for (let card = 0; card < cards.length - maxContent; card++) {
        card < curIdx
          ? (cards[card].style.display = 'none')
          : (cards[card].style.display = 'grid');
      }
    }
  }
};

items();
