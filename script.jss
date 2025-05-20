const searchBar = document.getElementById("searchBar");
const filter = document.getElementById("departmentFilter");
const cards = document.querySelectorAll(".project-card");

function filterProjects() {
  const searchText = searchBar.value.toLowerCase();
  const selectedDept = filter.value;

  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const dept = card.dataset.department;

    const matchesSearch = title.includes(searchText);
    const matchesFilter = selectedDept === "all" || dept === selectedDept;

    if (matchesSearch && matchesFilter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchBar.addEventListener("input", filterProjects);
filter.addEventListener("change", filterProjects);
