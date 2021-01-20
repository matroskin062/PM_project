const promotions = () => {
  const container = document.querySelector('.promotion .crd-view');
  container.innerHTML = '';

  if (!PROMOTIONS.length) {
    document.querySelector('.promotion').style.display = 'none';
  } else {
    const createPromotion = (el) => {
      return `
      <div class="card card-prom">
        <a href="" class="crd-link">${el.title}</a>
        <div class="crd-img-prom"></div>
        <p class="crd-price">
          ${el.description}
        </p>
        <div class="crd-term ${el.time_action ? '' : 'infinite'}">
          ${
            el.time_action
              ? `<div class="term-p">Срок действия:</div>
          <div class="time d1">${parseTime(el.time_action).days[0]}</div>
          <div class="time d2">${parseTime(el.time_action).days[1]}</div>
          <div class="h3">:</div>
          <div class="time h1">${parseTime(el.time_action).hours[0]}</div>
          <div class="time h2">${parseTime(el.time_action).hours[1]}</div>
          <div class="m3">:</div>
          <div class="time m1">${parseTime(el.time_action).minutes[0]}</div>
          <div class="time m2">${parseTime(el.time_action).minutes[1]}</div>
          <div class="t-p d-p">дней</div>
          <div class="t-p h-p">часов</div>
          <div class="t-p m-p">минут</div>`
              : `<p >БЕССРОЧНО</p>`
          }
        </div>
        <a class="crd-more" href=${el.url}>Подробнее</a>
      </div>
    `;
    };
    const arr = [];
    const proms = PROMOTIONS.map((el) => {
      if (el.title && el.description && el.url) {
        container.innerHTML += createPromotion(el);
        return el;
      }
    }).filter((el) => el);

    document
      .querySelectorAll('.crd-img-prom')
      .forEach(
        (el, i) =>
          (el.style.background = `url(${
            proms[i].img || 'img/no-image-icon-23499.png'
          }) center center/contain no-repeat`)
      );
  }
};

const parseTime = (time) => {
  const parsed = time.split(' ').map((el) => {
    const n = el.match(/[0-9]/g).join('');
    if (n < 10) return '0' + n;
    else return n;
  });
  const [days, hours, minutes] = parsed;
  return {
    days,
    hours,
    minutes,
  };
};

promotions();
