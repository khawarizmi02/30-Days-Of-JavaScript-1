// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

//
// Declare an empty array;
// let emptyarray = [];
// Declare an array with more than 5 number of elements
// let arraymorethan5 = [1,2,3,4,5,6,7,8,9];
// Find the length of your array
// let lengthofarray = arraymorethan5.length;
// alert(lengthofarray);
// Get the first item, the middle item and the last item of the array
// let getfirstitem = arraymorethan5[0];
// let getmiddleitem = arraymorethan5[lengthofarray/2];
// let getlastitem = arraymorethan5[lengthofarray-1];
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// letmixedDatatypes = [1,'name',true,3.456,'Y','long name',''];
// alert(letmixedDatatypes);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);
// Print the array using console.log()
// console.log(itCompanies);
// Print the number of companies in the array
// console.log(itCompanies.length);
// Print the first company, middle and last company
// console.log(itCompanies[0],itCompanies[lengthofarray/2],itCompanies[lengthofarray-1]);
// Print out each company
// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
// }
// Change each company name to uppercase one by one and print them out
// for (let i = 0; i < itCompanies.length; i++) {
//     itCompanies[i] = itCompanies[i].toUpperCase();
//     console.log(itCompanies[i]);
// }
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// let result = "";
// for (let i = 0; i < itCompanies.length; i++) { result += itCompanies[i];
//     if (i < itCompanies.length - 2) { result += ", ";
//     } else if (i < itCompanies.length - 1) {
//         result += " and ";
//     }}
// result += " are big IT companies";
// console.log(result);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let searchResult = 'abc'
// let searchresult = true;
// for (let i = 0; i < itCompanies.length; i++) {
//     if (itCompanies[i] === searchResult) {
//         console.log(itCompanies[i]);
//         searchresult = true;
//         break;
//     }else searchresult = false;
// } if (searchresult === false ) console.log('company not found');
// Filter out companies which have more than one 'o' without the filter method
// let filteredCompanies = [];
// for (let i = 0; i < itCompanies.length; i++) {
//     let company = itCompanies[i];
//     let oCount = 0;
//     for (let j = 0; j < company.length; j++) {
//         if (company[j].toLowerCase() === 'o') {
//             oCount++;
//         }
//     }
//     if (oCount > 1) {
//         filteredCompanies.push(company);
//     }
// }
// console.log(filteredCompanies);
// Sort the array using sort() method
// let sorted = itCompanies.sort();
// console.log(sorted);
// Reverse the array using reverse() method
// let reversed = itCompanies.reverse();
// console.log(reversed);
// Slice out the first 3 companies from the array
// for (let i = 0; i < 3; i++) {
//     console.log(itCompanies[i]);
// }
// Slice out the last 3 companies from the array
// for (let i = itCompanies.length; i > itCompanies.length-4; i--) {
//     console.log(itCompanies[i]);
// }
// Slice out the middle IT company or companies from the array
// if (itCompanies%2 === 0) {
//     let middle1 = itCompanies.length/2;
//     let middle2 = itCompanies.length/2 + 1;
//     console.log(itCompanies.slice(middle1, middle2+1));
// }
// else {
//     let middle = (itCompanies.length-1)/2;
//     console.log(itCompanies[middle]);
// }
// Remove the first IT company from the array
// itCompanies.shift();
// console.log(itCompanies);
// Remove the last IT company from the array
// itCompanies.pop();
// console.log(itCompanies);
// Remove all IT companies from the array
// itCompanies.splice(0, itCompanies.length);
// console.log(itCompanies);
// Remove the middle IT company or companies from the array
// if (itCompanies%2 === 0) {
//     let middle1 = itCompanies.length/2;
//     let middle2 = itCompanies.length/2 + 1;
//     console.log(itCompanies.splice(middle1, middle2+1));
// }
// else {
//     let middle = (itCompanies.length-1)/2;
//     console.log(itCompanies.splice(middle,1));
// }

// const countries = require('./../data/countries.js');
// const webTechs = require('./../data/web_techs.js');
//
// console.log('Countries:', countries);
// console.log('Web Technologies:', webTechs);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let words = text;
let textArray = text.split(" ");
console.log(textArray);
console.log(textArray.length);