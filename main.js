const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const list = document.querySelector(".nav_links");

addBtn.addEventListener("click", () => {
  console.log(1);
  list.classList.add("blok");
});
removeBtn.addEventListener("click", () => {
  console.log(1);
  list.classList.remove("blok");
});
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-60px";
  }
}
