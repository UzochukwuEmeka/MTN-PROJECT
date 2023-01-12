//Get All Dropdown
const dropdowns = document.querySelectorAll(".dropdown");
// Loop through all dropdown elements
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // Add a click event to the selcted element
  select.addEventListener("click", () => {
    // Add a click select style to the caret element
    caret.classList.toggle("caret-rotate");
    // Add the Open style to the  menu  element
    menu.classList.toggle("menu-open");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        // Add the style of the class style on the seleted element
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        options.forEach((option) => {
          option.classList.remove("active");
        });
        option.classList.add("active");
      });
    });
  });
});