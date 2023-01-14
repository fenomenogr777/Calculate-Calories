"use strict";
const gender = document.querySelector("#gender");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const age = document.querySelector("#age");
const activity = document.querySelector("#activity");
const goal = document.querySelector("#goal");
const btnCalc = document.querySelector("#btn-calculate");
const btnClear = document.querySelector("#btn-clear");

const container = document.querySelector("#container");

const cleanCode = function (BMR) {
  const TDEE = BMR * Number(activity.value);
  const calories = TDEE + TDEE * (Number(goal.value) / 100);
  console.log(calories);
  const protein = Math.floor((calories * 0.205) / 4);
  const carbohydrate = Math.floor((calories * 0.545) / 4);
  const fat = Math.floor((calories * 0.25) / 9);
  const html = `
Your Ideal Calories are: ${calories}</br>
Protein*:${protein}</br>
carbohydrate:${carbohydrate}</br>
Fat:${fat}

*=Optimal protein intake is your kg*2,sometimes the number is too much
`;
  container.insertAdjacentHTML("afterbegin", html);
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

btnCalc.addEventListener("click", calcCalories);
