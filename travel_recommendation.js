const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value;
  alert(`Searching for: ${query}`);
  // Perform search logic here
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
});
