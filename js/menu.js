const menu = () => {
  renderMenuItems();
  const navRight = document.querySelector('.nav-right');
  const navLeft = document.querySelector('.nav-left');
  const cont = document.querySelector('.nav-items');

  if (!MENU.length) {
    document.querySelector('.menu').style.display = 'none';
  }
  if (MENU.length > 9) {
    navRight.classList.remove('dis-nav');
    let scrollValue = 0;
    navRight.addEventListener('click', () => {
      cont.scrollLeft += 100;
      scrollValue += 100;
      if (scrollValue > 0) {
        navLeft.classList.remove('dis-nav');
      }
      if (cont.scrollWidth - cont.clientWidth <= scrollValue) {
        navRight.classList.add('dis-nav');
      }
    });

    navLeft.addEventListener('click', () => {
      cont.scrollLeft -= 100;
      scrollValue -= 100;
      if (scrollValue === 0) {
        navLeft.classList.add('dis-nav');
        navRight.classList.remove('dis-nav');
      }
      if (scrollValue !== cont.scrollWidth - cont.clientWidth) {
        navRight.classList.remove('dis-nav');
      }
    });
    document
      .querySelector('.banner')
      .addEventListener('click', () => console.log(cont.scrollLeft));
  }
};

function renderMenuItems() {
  const sortedMenuItems = Object.values(MENU).sort((a, b) => a.order - b.order);
  const container = document.querySelector('.nav-items');
  container.innerHTML = '';
  sortedMenuItems.map((el) => {
    container.innerHTML += `
          <div>
            <a href=${el.url}>${el.title}</a>
          </div>
        `;
  });
}

menu();
