const API_URL = "travel_recommendation_api.json";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value;

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("fetched data", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
});
