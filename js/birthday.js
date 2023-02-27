let likebtn = document.querySelector("#likebtn");
let input1 = document.querySelector("#input1");
likebtn.addEventListener("click", () => {
  input1.value = parseInt(input1.value) + 1;
  input1.style.color="#ffcb05"
  likebtn.classList.add('active')
});
