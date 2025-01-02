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
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price}`;
            list.appendChild(listItem);
        });

        section.appendChild(list);
        menuContainer.appendChild(section);
    });
}