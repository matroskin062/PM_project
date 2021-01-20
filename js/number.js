const numbers = () => {
  let maxContent =
    document.body.clientWidth < 980
      ? 4
      : document.body.clientWidth > 981
      ? 6
      : 0;
  const elements = document.querySelectorAll('.numbers__content-item');
  let idx = 0;
  const render = (data) => {
    document.querySelector('.numbers__content').innerHTML = '';
    [...data].map((el) => {
      document.querySelector('.numbers__content').innerHTML += el.outerHTML;
    });
  };

  render(elements);

  const navRight = document.querySelector('.numbers .min-next');
  const navLeft = document.querySelector('.numbers .min-prev');

  console.log(maxContent);
  navRight.addEventListener('click', () => {
    navLeft.classList.remove('dmb');
    if (idx < elements.length - maxContent - 1) {
      idx += 3;
      render([...elements].slice(idx, elements.length));
    }
    if (idx === maxContent - 1) {
      navRight.classList.add('dmb');
    }
  });
  navLeft.addEventListener('click', () => {
    if (idx >= 3) {
      idx -= 3;
      navRight.classList.remove('dmb');
      render([...elements].slice(idx, elements.length));
      navLeft.classList.add('dmb');
    }
    // else if (idx < 3) {
    //   render([...elements].slice(idx, elements.length));
    // }
  });
  // navRight.classList.remove('dmb');
  navLeft.classList.add('dmb');
};

numbers();
