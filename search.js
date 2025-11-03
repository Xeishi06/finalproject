document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchDropdown = document.createElement("div");
  searchDropdown.id = "searchDropdown";
  searchInput.parentNode.appendChild(searchDropdown);

  //List of searchable terms and their target IDs or links
  const items = [
    { name: "Mechanical Keyboard", link: "mechkeyboard.html" },
    { name: "Membrane Keyboard", link: "membrane.html" },
    { name: "Wireless Keyboard", link: "wirelesskeyboard.html" },
    { name: "Gaming Mouse", link: "gamingmouse.html" },
    { name: "Wireless Mouse", link: "wirelessmouse.html" },
    { name: "Optical Mouse", link: "opticalmouse.html" },
    { name: "Gaming Monitor", link: "gamingmonitor.html" },
    { name: "Curved Monitor", link: "curvedmonitor.html" },
    { name: "Ultrawide Monitor", link: "ultrawide.html" },
  ];

  //Handle typing
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    searchDropdown.innerHTML = "";

    if (query.length === 0) return;

    const results = items.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    results.forEach((result) => {
      const option = document.createElement("div");
      option.textContent = result.name;
      option.classList.add("dropdown-item");
      option.onclick = () => {
        window.location.href = result.link;
      };
      searchDropdown.appendChild(option);
    });

    if (results.length === 0) {
      const noResult = document.createElement("div");
      noResult.textContent = "No results found";
      noResult.classList.add("dropdown-item");
      searchDropdown.appendChild(noResult);
    }
  });

  //Hide dropdown if clicking outside
  document.addEventListener("click", (e) => {
    if (!searchDropdown.contains(e.target) && e.target !== searchInput) {
      searchDropdown.innerHTML = "";
    }
  });
});
