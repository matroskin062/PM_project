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

  const createItem = (el) => {
    return `
      <div class="card">
        <div class="crd-label ${el.type}-label"></div>
        <div class="crd-img" id="tel1"></div>
        <a href=${el.url} class="crd-link"
          >${el.description}</a>
        <p class="crd-price">
          Цена:
          <strong>${el.price} ${el.currency}</strong>
          <del>${el.oldPrice} ${el.currency}</del>
        </p>
        <div class="crd-buy">КУПИТЬ</div>
        <a class="crd-more">Подробнее</a>
      </div>
    `;
  };
  const renderProducts = (target, data) => {
    target.innerHTML = '';
    data.map((el) => (target.innerHTML += createItem(el)));
  };
  renderProducts(document.querySelector('.new-items .crd-view'), newItems);
  renderProducts(
    document.querySelector('.recommend .crd-view'),
    recommendedItems
  );
  renderProducts(document.querySelector('.sale .crd-view'), saleItems);
};

items();
