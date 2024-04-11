const dayIn = document.querySelector(".day");
const monthIn = document.querySelector(".month");
const yearIn = document.querySelector(".year");

const dd = document.querySelector(".DD");
const mm = document.querySelector(".MM");
const yy = document.querySelector(".YY");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

const date = new Date();

let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is required";
      validator = false;
    } else if (monthIn.value > 12) {
      monthIn.style.borderColor = "red";
      monthIn.querySelector("small").innerText = "Must be a valid month";
      validator = false;
    } else if (dayIn > 31) {
      dayIn.style.borderColor = "red";
      dayIn.querySelector("small").innerText = "Must be a valid day";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayIn.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthIn.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayIn.value;
    const m = month - monthIn.value;
    const y = year - yearIn.value;

    dd.innerHTML = d;
    mm.innerHTML = m;
    yy.innerHTML = y;
  }
}
