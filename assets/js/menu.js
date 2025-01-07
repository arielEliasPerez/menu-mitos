// Función para crear el diseño de cada ítem
const createMenuItem = (item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">$${item.price}</div>
    `;

    return menuItem;
  };

function renderMenu(data) {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = ""; //clean up old content
    const categories = [...new Set(data.map(item => item.category))];

    categories.forEach(category => {
        const section = document.createElement("section");
        section.id = category.toLowerCase();
        section.innerHTML = `<h2>${category}</h2>`;

        const list = document.createElement("ul");
        data.filter(item => item.category === category).forEach(item => {
            const menuItem = createMenuItem(item);
            list.appendChild(menuItem);
        });

        section.appendChild(list);
        menuContainer.appendChild(section);
    });
}



  