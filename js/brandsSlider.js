const brandsSlider = () => {
  const navRight = document.querySelector('.brands .min-next');
  const navLeft = document.querySelector('.brands .min-prev');
  const cont = document.querySelector('.brands__content');

  navRight.classList.remove('dmb');
  navLeft.classList.add('dmb');
  let scrollValue = 0;
  navRight.addEventListener('click', () => {
    cont.scrollLeft += 100;
    scrollValue += 100;
    if (scrollValue > 0) {
      navLeft.classList.remove('dmb');
    }
    if (cont.scrollWidth - cont.clientWidth <= scrollValue) {
      navRight.classList.add('dmb');
    }
  });

  navLeft.addEventListener('click', () => {
    cont.scrollLeft -= 100;
    scrollValue -= 100;
    if (scrollValue === 0) {
      navLeft.classList.add('dmb');
      navRight.classList.remove('dmb');
    }
    if (scrollValue !== cont.scrollWidth - cont.clientWidth) {
      navRight.classList.remove('dmb');
    }
  });
};

brandsSlider();
