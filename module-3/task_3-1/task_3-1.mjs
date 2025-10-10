"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

let wakeUpTime = 6;

if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

let number = 0;

if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6, Part 7 ----------------------------------------------------------------------------------------------");

let imageSize = Math.floor(Math.random() * 8) + 1;

printOut("Image size: " + imageSize + "MP");

if (imageSize >= 6) {
  printOut("Image is too large");
} else if (imageSize >= 4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const monthList = [
  "January", "February", "Mars", "April", "Mai",
  "Juni", "Juli", "August", "September", "October", "November", "December"
];

const noOfMonth = monthList.length;

const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month: " + monthName);

if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");


const monthDays = {
  "January": 31,
  "February": 28, 
  "Mars": 31,
  "April": 30,
  "Mai": 31,
  "Jun": 30,
  "Juli": 31,
  "August": 31,
  "September": 30,
  "October": 31,
  "November": 30,
  "December": 31
};


printOut("Month: " + monthName);

if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut("Number of days: " + monthDays[monthName]);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

if (monthName === "Mars" || monthName === "Mai") {
  printOut("Gallery is closed");
} else if (monthName === "April") {
  printOut("Gallery open in temporary premises");
} else {
  printOut("Gallery is open");
}


printOut(newLine);
