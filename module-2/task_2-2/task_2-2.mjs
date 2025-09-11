"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const result = 2 + 3 * (2 - 4) * 6;
printOut("2 + 3 * 2 - 4 * 6 ="), printOut(result);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const mmPerMetre = 1000;
const mmPerCentimetre = 10;
const mmPerInch = 25.4;

const metres = 25;
const centimetres = 34;

const totalMillimetres = (metres * mmPerMetre) + (centimetres * mmPerCentimetre);

const inches = totalMillimetres / mmPerInch;

const roundedInches = inches.toFixed(2);
printOut(`${metres} metres and ${centimetres} centimetres = ${roundedInches}`);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);

printOut(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds = ${totalMinutes}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const inputMinutes = 6322.52;

const part4_days = Math.floor(inputMinutes / 1440);
const part4_remainingAfterDays = inputMinutes % 1440;
const part4_hours = Math.floor(part4_remainingAfterDays / 60);
const part4_remainingAfterHours = part4_remainingAfterDays % 60;
const part4_minutes = Math.floor(part4_remainingAfterHours);
const part4_seconds = Math.round((part4_remainingAfterHours - part4_minutes) * 60);

printOut(`${inputMinutes} minutes = ${part4_days} days, ${part4_hours} hours, ${part4_minutes} minutes and ${part4_seconds} seconds`);
printOut(newLine);

printOut("--- Part 5 --------------------------------------------------");
printOut(newLine);

const usdAmount = 54;
const nokPerUsd = 76 / 8.6;
const usdPerNok = 8.6 / 76;

const nokAmount = Math.round(usdAmount * nokPerUsd);
const usdAmountBack = Math.round(nokAmount * usdPerNok);

printOut(`${usdAmount} USD = ${nokAmount} NOK`);
printOut(newLine);
printOut(`${nokAmount} NOK = ${usdAmountBack} USD`);
printOut(newLine);


printOut("--- Part 6 --------------------------------------------------");
printOut(newLine);

const text = "Det er mye mellom himmel og jord som vi ikke forstår.";
printOut(`"${text}"`);
printOut(newLine);

const length = text.length;


const charAt19 = text.charAt(19);

const substring35_8 = text.substr(35, 8); // or use substring(35, 35+8)

const indexEarth = text.indexOf("jord");

printOut(`Number of characters: ${length}`);
printOut(newLine);

printOut(`Character at position 19: '${charAt19}'`);
printOut(newLine);

printOut(`8 characters from position 35: "${substring35_8}"`);
printOut(newLine);

printOut(`The word "jord" starts at the position of ${indexEarth}`);
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("5 > 3 is " + (5 > 3));
printOut(newLine);

printOut("7 >= 7 is " + (7 >= 7));
printOut(newLine);

printOut('"a" > "b" is ' + ("a" > "b"));
printOut(newLine);

printOut('"1" < "a" is ' + ("1" < "a"));
printOut(newLine);

printOut('"2500" < "abcd" is ' + ("2500" < "abcd"));
printOut(newLine);

printOut('"arne" !== "thomas" is ' + ("arne" !== "thomas"));
printOut(newLine);

printOut("(2 === 5) is " + (2 === 5));
printOut(newLine);

printOut('("abcd" > "bcd") is ' + ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut('"254" = ' + Number("254"));
printOut(newLine);

printOut('"57.23" = ' + Number("57.23"));
printOut(newLine);

printOut('"25 kroner" = ' + parseInt("25 kroner"));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1; // Generates 1 <= r <= 360

printOut("Math.ceil(Math.random() * 360) = " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays10 = 131;
const weeks10 = Math.floor(totalDays10 / 7);
const leftoverDays10 = totalDays10 % 7;

printOut(`${totalDays10} days is ${weeks10} weeks and ${leftoverDays10} days.`);
printOut(newLine);