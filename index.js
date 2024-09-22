"use strict";

import { data } from "./mockData.js";

// Your code here

let userProfile = {};

const question1 = "What is your first name?";
const question2 = "What is your last name?";
const question3 = "How old are you?";
const question4 = "What is your gender? M,F,X";
const question5 = "Wich gender are you interested in? M,F,X";
const question6 = "Where do you live? city/rural";
const question7 = "What is the minimum age you are looking for?";
const question8 = "What is the maximum age you are looking for?";

//first name
let firstName;
while (true) {
  firstName = prompt(question1);
  if (firstName !== "") {
    break;
  }
}
userProfile.first_name = firstName;

//last name
let lastName;
while (true) {
  lastName = prompt(question2);
  if (lastName !== "") {
    break;
  }
}
userProfile.last_name = lastName;

//age
let age;
while (true) {
  age = Number(prompt(question3));
  if (age >= 18) {
    break;
  }
}
userProfile.age = age;

//gender
let gender;
while (true) {
  gender = prompt(question4);
  if (gender === "M" || gender === "F" || gender === "X") {
    break;
  }
}
userProfile.gender = gender;

//gender interest
let genderInterest;
while (true) {
  genderInterest = prompt(question5);
  if (
    genderInterest === "M" ||
    genderInterest === "F" ||
    genderInterest === "X"
  ) {
    break;
  }
}
userProfile.gender_interest = genderInterest;

//location
let location;
while (true) {
  location = prompt(question6);
  if (location === "city" || location === "rural") {
    break;
  }
}
userProfile.location = location;

//minimum age interest
let minAgeInterest;
while (true) {
  minAgeInterest = Number(prompt(question7));
  if (minAgeInterest >= 18) {
    break;
  }
}
userProfile.min_age_interest = minAgeInterest;

//max age interest
let maxAgeInterest;
while (true) {
  maxAgeInterest = Number(prompt(question8));
  if (maxAgeInterest >= 18 && maxAgeInterest >= minAgeInterest) {
    break;
  }
}
userProfile.max_age_interest = maxAgeInterest;
console.log(userProfile);

const numberOfMatches = data.length;

//check if ages, age requirements, genders, gender interest and location match
let k = 0;
let matchCount = 0;
while (k < numberOfMatches) {
  const matchAge = Number(data[k].age);
  const matchMinAge = Number(data[k].min_age_interest);
  const matchMaxAge = Number(data[k].max_age_interest);
  const matchGender = data[k].gender;
  const matchGenderInterest = data[k].gender_interest;
  const matchLocation = data[k].location;
  const matchName = data[k].first_name + " " + data[k].last_name;
  if (
    userProfile.age <= matchMaxAge &&
    userProfile.age >= matchMinAge &&
    matchAge <= userProfile.max_age_interest &&
    matchAge >= userProfile.min_age_interest &&
    matchGender === userProfile.gender_interest &&
    matchGenderInterest === userProfile.gender &&
    matchLocation === userProfile.location
  ) {
    console.log(
      `Your matches are: ${matchName}, ${matchAge} years old, lives in ${matchLocation}`
    );
    matchCount++; //Add 1 match to the counter when the loop find one
  }
  k++;
}
console.log(`You have ${matchCount} matches!`);
