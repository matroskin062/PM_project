const brandsSlider = () => {
  let maxContent =
    document.body.clientWidth < 980
      ? 5
      : document.body.clientWidth < 1139
      ? 7
      : document.body.clientWidth > 1140
      ? 9
      : 0;
  const brandImages = [
    './img/samsung_logo.jpg',
    '/img/panasonic_logo.jpg',
    '/img/siemens_logo.jpg',
    '/img/fanvil_logo.jpg',
    '/img/escene_logo.jpg',
    '/img/yealink_logo.png',
    '/img/senao_logo.png',
    '/img/openvox_logo.jpg',
    '/img/open-mesh_logo.png',
  ];
  const cont = document.querySelector('.brands__content');

  let idx = 0;
  const render = (images = brandImages) => {
    cont.innerHTML = '';
    images.map((el) => {
      cont.innerHTML += ` <div>
            <img src="${el}" alt="" />
          </div>`;
    });
  };

  render();

  const navRight = document.querySelector('.brands .min-next');
  const navLeft = document.querySelector('.brands .min-prev');

  navRight.addEventListener('click', () => {
    navLeft.classList.remove('dmb');
    if (idx < brandImages.length - maxContent) {
      idx++;
      render(brandImages.slice(idx, brandImages.length));
    }
    if (idx === maxContent - 1) {
      navRight.classList.add('dmb');
    }
  });
  navLeft.addEventListener('click', () => {
    if (idx > 0) {
      idx--;
      navRight.classList.remove('dmb');

      render(brandImages.slice(idx, brandImages.length));
    } else if (idx === 0) {
      render(brandImages.slice(idx, brandImages.length));
      navLeft.classList.add('dmb');
    }
  });
  // navRight.classList.remove('dmb');
  navLeft.classList.add('dmb');
};

brandsSlider();
