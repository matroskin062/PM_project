const buyingNow = () => {
  const container = document.querySelector('.now__content');
  container.innerHTML = '';
  const nowItem = (el) => {
    return `
      <div class="now__content-item">
        <a href="#" class="flex">
          <img src=${'img/now-img1.png'} alt="" />
          <p>Замок дверной Samsung SHS-2320 XMK/EN</p>
        </a>
      </div>
    `;
  };

  BUYING_RIGHT_NOW.map((el) => {
    container.innerHTML += nowItem(el);
  });
};

buyingNow();
