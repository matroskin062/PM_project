const cart = BASKET;

const cartCount = document.querySelector('[data-count]');
const cartPrice = document.querySelector('[data-price]');
const mobileCart = document.querySelector('.header__cart-ico');

const updateCart = () => {
  mobileCart.setAttribute('data-value', cart.elements);
  cartCount.innerText = cart.elements;
  cartPrice.innerText = `${cart.price} ${CURRENCY}`;
};

updateCart();
const addToCart = (price) => {
  cart.price += price;
  cart.elements++;
  updateCart();
};
