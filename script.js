"use strict";
const gender = document.querySelector("#gender");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const age = document.querySelector("#age");
const activity = document.querySelector("#activity");
const goal = document.querySelector("#goal");
const btnCalc = document.querySelector("#btn-calculate");
const btnClear = document.querySelector("#btn-clear");
const containerResult = document.querySelector("#container-result");

const cleanCode = function (BMR) {
  const TDEE = BMR * Number(activity.value);
  const calories = Math.floor(TDEE + TDEE * (Number(goal.value) / 100));
  let protein = Math.floor((calories * 0.27) / 4);
  let carbohydrate = Math.floor((calories * 0.5) / 4);
  const fat = Math.floor((calories * 0.23) / 9);
  if (protein >= Number(weight.value * 2)) {
    carbohydrate += protein - Number(weight.value * 2);
    protein = weight.value * 2;
  }

  containerResult.classList.add("active");
  const html = `
Calories: ${calories}</br>
Protein: ${protein}</br>
carbohydrate: ${carbohydrate}</br>
Fat: ${fat}
`;
  containerResult.innerHTML = html;
};

const calcCalories = function () {
  const genderValue = gender.value;
  if (genderValue === "male") {
    const BMR = 66 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value;
    cleanCode(BMR);
  } else if (genderValue === "female") {
    const BMR = 655 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value;
    cleanCode(BMR);
  }
};

const clearValues = function () {
  gender.value = "";
  weight.value = "";
  height.value = "";
  age.value = "";
  activity.value = "";
  goal.value = "";
  containerResult.classList.remove("active");
};

btnCalc.addEventListener("click", calcCalories);
btnClear.addEventListener("click", clearValues);
