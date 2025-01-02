
document.getElementById("search-input").addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    const filteredData = menuData.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    renderMenu(filteredData);
  });
  