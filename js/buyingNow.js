const buyingNow = () => {
  const container = document.querySelector('.now__content');
  let maxContent =
    document.body.clientWidth > 1140
      ? 4
      : document.body.clientWidth < 980
      ? 3
      : document.body.clientWidth < 750
      ? 0
      : 0;

  container.innerHTML = '';
  const nowItem = (el) => {
    return `
      <div class="now__content-item">
        <a href="${el.url}" class="flex">
          <img src=${el.img || '/img/no-image-icon-23499.png'} alt="" />
          <p>Замок дверной Samsung SHS-2320 XMK/EN</p>
        </a>
      </div>
    `;
  };

  BUYING_RIGHT_NOW.slice(0, maxContent).map((el) => {
    if (el.url) container.innerHTML += nowItem(el);
  });
};

buyingNow();
