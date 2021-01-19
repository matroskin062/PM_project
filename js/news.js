const news = () => {
  const container = document.querySelector('.news div');
  container.innerHTML = '';
  const randomNews = NEWS.sort(function () {
    return 0.5 - Math.random();
  }).slice(0, 3);

  randomNews.map((el) => {
    container.innerHTML += `
        <hr>
        <article>
                    <div class="news-img">
                        <div class="img" id="news_1"></div>
                        <div class="news-day">${parseDate(el.date).day}</div>
                        <p class="news-mounts">${parseDate(el.date).month}</p>
                    </div>
                    <div class="news-txt">
                        <a href=${el.url}>${el.title}</a><br />${el.description}
                    </div>
                </article>`;
  });
};

function parseDate(date) {
  const parsedDate = new Date(date)
    .toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
    })
    .split(' ');
  return {
    day: parsedDate[0],
    month: parsedDate[1],
  };
}
news();
