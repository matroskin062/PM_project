const cart = () => {
  const cartCount = document.querySelector('[data-count]');
  const cartPrice = document.querySelector('[data-price]');

  const cart = BASKET;

  const updateCart = () => {
    cartCount.innerText = cart.elements;
    cartPrice.innerText = `${cart.price} ${CURRENCY}`;
  };

  const addToCart = (e) => {
    const price = parseInt(
      e.target.parentElement
        .querySelector('.crd-price strong')
        .innerText.split(' ')
        .slice(0, 1)
    );

    cart.price += price;
    cart.elements++;
    updateCart();
  };

  document
    .querySelectorAll('.crd-buy')
    .forEach((el) => el.addEventListener('click', addToCart));
};

const convert = (amount, from, to) => {
  return (from / to) * amount;
};

console.log(convert(1, CURRENCY_EXCHANGE.RUB, CURRENCY_EXCHANGE.USD));

cart();
