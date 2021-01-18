const topMenu = () => {
        const container = document.querySelector('.linear');
        container.innerHTML = '';
        let items = Object.values(TOP_MENU).sort((a, b) => a.order - b.order);
        const createMenuItem = (data) => {
                return `
      <li>
        <a href=${data.url}>${data.title}</a>
        ${
          data.submenu
            ? `
            <span class="tri">&#9660;</span>
            <ul class="drop-down">
              ${data.submenu
                .sort((a, b) => a.order - b.order)
                .map((el) => {
                  if (el.title && el.url)
                    return `<li><a href=${el.url}>${el.title}</a></li>`;
                })
                .join('')}
            </ul>`
            : ''
        }
      </li>
    `;
  };

  if (!Object.keys(TOP_MENU).length) {
    document.querySelector('.top-menu').style.display = 'none';
  } else {
    if (items.length > 9) {
      items = items.slice(0, 9);
    }
    items.map((el) => {
      if (el.title) container.innerHTML += createMenuItem(el);
    });
  }
};

topMenu(TOP_MENU);