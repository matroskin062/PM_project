//#TODO: START AND STOP INTERVAL
const slider = () => {
  const slides = BANNER.sort((a, b) => a.order - b.order).map((el) => {
    if (el.img && el.url) return el.img;
    else console.log(el);
  });

  const container = document.querySelector('.slider-box');

  const sliderDotsCont = document.querySelector('.slider-dots');

  sliderDotsCont.innerHTML = '';
  slides.map(() => (sliderDotsCont.innerHTML += '<li></li>'));

  const sliderDots = document.querySelectorAll('.slider-dots li');

  let currentSlide = 0;
  sliderDots[currentSlide].classList.add('active');

  const changeSlide = () => {
    container.style.background = `url(${slides[currentSlide]}) left center no-repeat`;
    document.querySelector('.slider-link').href = BANNER[currentSlide].url;
  };

  // changeSlide();

  const jumpToSlide = (i) => {
    sliderDots[currentSlide].classList.remove('active');
    currentSlide = i;
    sliderDots[currentSlide].classList.add('active');
    changeSlide();
  };

  sliderDots.forEach((el, i) =>
    el.addEventListener('click', () => jumpToSlide(i))
  );

  const nextSlide = () => {
    sliderDots[currentSlide].classList.remove('active');
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    sliderDots[currentSlide].classList.add('active');
    changeSlide();
  };

  const prevSlide = () => {
    sliderDots[currentSlide].classList.remove('active');

    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slides.length - 1;
    }
    sliderDots[currentSlide].classList.add('active');

    changeSlide();
  };

  const nextBtn = document.querySelector('.slider-control.next');
  nextBtn.addEventListener('click', nextSlide);
  const prevBtn = document.querySelector('.slider-control.prev');
  prevBtn.addEventListener('click', prevSlide);

  setTimeout(() => {
    setInterval(() => nextSlide(), 5000);
  }, 5000);
};

slider();
