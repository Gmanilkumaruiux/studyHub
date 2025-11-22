

// Tabs
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.page).classList.add("active");
  });
});

// Search
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    let filter = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll("#page-courses .card");

    cards.forEach(card => {
      let text = card.innerText.toLowerCase();
      card.style.display = text.includes(filter) ? "block" : "none";
    });
  });
}

// Hamburger Menu
function openMenu() {
  document.getElementById("sideMenu").classList.add("active");
}
function closeMenu() {
  document.getElementById("sideMenu").classList.remove("active");
}


function openTab(pageId) {
  // remove active from all tabs and pages
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  // activate the correct page
  document.getElementById(pageId).classList.add("active");

  // also activate the correct tab in navbar
  document.querySelector(`.tab[data-page='${pageId}']`)?.classList.add("active");

  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
