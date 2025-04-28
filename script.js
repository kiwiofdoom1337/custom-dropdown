let selector = document.getElementById("selector");
let dropArrow = document.getElementById("dropArrow");
let items = document.getElementById("items");
let itemElement = document.querySelectorAll(".item");
let checkmarks = document.querySelectorAll(".checkmark");

selector.addEventListener("click", () => {
  dropArrow.classList.toggle("rotate");
  items.classList.toggle("hidden");
});

itemElement.forEach((element, index) => {
  let checkmark = checkmarks[index];

  element.addEventListener("click", () => {
    checkmark.classList.toggle("hidden");
    items.classList.toggle("hidden");
  })
})