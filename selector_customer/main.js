const selected = document.querySelector(".selected");
const selected2 = document.querySelector(".two");


const optionsContainer = document.querySelector(".options-container");
const optionsContainer2 = document.querySelector(".two-op");

const optionsList = document.querySelectorAll(".option");
const optionsList2 = document.querySelectorAll('.two-o')

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});



optionsList.forEach(c => {
  c.addEventListener("click", () => {
    selected.innerText = c.querySelector(".option-label").innerText;
    optionsContainer.classList.remove("active");
  });
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerText = o.querySelector(".option-label2").innerText;
    optionsContainer2.classList.remove("active");
  });
});