// // this is your main.js script
//
alert('Open the browser console whenever you work on JavaScript')
//
// let num = prompt('Enter number');
// switch (true) {
//     case num > 0:
//         alert('Number is positive');
//         break;
//     case num == 0:
//         alert('Numbers is zero');
//         break;
//     case num < 0:
//         alert('Number is negative');
//         break;
//     default:
//         alert('Entered value was not a number');
// }

// alert('Excersize 1 level 1');
//
// Enter your age: 30
// You are old enough to drive.
//
//     Enter your age:15
// You are left with 3 years to drive.
//
// let age = prompt('Enter your age');
// switch (true) {
//     case age >= 18:
//         alert('You are old enough to drive');
//         break;
//     case age < 18:
//         let pass = 18 - age;
//         let message = `You are left with ${pass} years to drive`;
//         alert(message);
//         break;
//     default:
//         alert('Entered value was not a number');
//         break;
// }



// alert('Excersise 2 level 1');
//
// Enter your age: 30
// You are 5 years older than me.

// let age = prompt('Enter your age');
// let setage = 25;
//
// switch (true) {
//     case age >= setage:
//         let gap = age - setage;
//         let message1 = `You are ${gap} years older than me`;
//         alert(message1);
//         break;
//     case age < setage:
//         let pass = setage - age;
//         let message2 = `You are ${pass} years younger than me`;
//         alert(message2);
//         break;
// }

// Excersise 3 level 2

// let a = 4
// let b = 3
//
// // if else statements
// if (a > b){
//     alert('a is greater than b');
// }
// else if (a < b){
//     alert('a is less than b');
// }
// // ternary statements
// let c = 4
// let d = 3
//
// let compare = c > d
// ? alert( 'a is greater than b')
//     : alert('a is less than b');

// Enter a number: 2
// 2 is an even number
//
// Enter a number: 9
// 9 is is an odd number.

// let num = prompt('Enter a number');
//
// if (num%2 === 0){
//     alert(num + ' is an even number');
// }
// else{
//     alert(num + ' is an odd number');
// }

// Excercise 1 Level 2

// Write a code which can give grades to students according to theirs scores:
//     80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let scores = prompt('Enter your scores');
//
// switch (true) {
//     case scores >= 80 && scores <= 100:
//         alert('A');
//         break;
//         case scores >= 70 && scores <= 89:
//             alert('B');
//             break;
//             case scores >= 60 && scores <= 69:
//                 alert('C');
//                 break;
//                 case scores >= 50 && scores <= 59:
//                     alert('D');
//                     break;
//                     case scores >= 0 && scores <= 49:
//                         alert('F');
//                         break;
//                         default:
// }

// Excercise 2 Level 2

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     September, October or November, the season is Autumn.
//     December, January or February, the season is Winter.
//     March, April or May, the season is Spring
//     June, July or August, the season is Summer

// let autumn = ['September', 'October', 'November', 'December', 'January'];
// let winter = ['March', 'April', 'May', 'June', 'Jul'];
// let spring = ['August', 'September', 'October', 'November'];
// let summer = ['December', 'January', 'February', 'March'];
//
//
// let season = prompt('Enter your season');
//
// switch (true) {
//     case season === autumn[0] || season === autumn[1] || season === autumn[2] || season === autumn[3] || season === autumn[4]:
//         alert('Autumn');
//         break;
//         case season === winter[0] || season === winter[1] || season === winter[2] || season === winter[3] || season === winter[4]:
//             alert('Winter');
//             break;
//             case season === spring[0] || season === spring[1] || season === spring[2] || season:
//                 alert('Spring');
//                 break;
//                 case season === summer[0] || season === summer[1] || season === summer[2] || season === summer[3]:
//                     alert('Summer');
//                     break;
//                     default:
//                         alert('Invalid input');
//                         break;
// }

// Excercise 3 Level 2

// What is the day  today? Saturday
//     Saturday is a weekend.
//
//     What is the day today? saturDaY
//     Saturday is a weekend.
//
//     What is the day today? Friday
//     Friday is a working day.
//
//     What is the day today? FrIDAy
//     Friday is a working day.

// let day = prompt('What is the day today?');
//
//  let getday = day.toLowerCase();
//
//  switch (getday) {
//      case 'saturday':
//      case 'sunday':
//          alert( getday.charAt(0).toUpperCase()+getday.slice(1)+' is a weekend');
//          break;
//      case 'friday':
//      case 'monday':
//      case 'tuesday':
//      case 'wednesday':
//      case 'thursday':
//          alert(getday.charAt(0).toUpperCase()+getday.slice(1)+' is a working day');
//          break;
//          default:
//              alert('invalid date');
//              break;
//  }

// Excercise  Level 3

// Enter a month: January
// January has 31 days.
//
//     Enter a month: JANUARY
// January has 31 day
//
// Enter a month: February
// February has 28 days.
//
//     Enter a month: FEbruary
// February has 28 days.

// let getMonth = prompt('Enter a month');
// let month = getMonth.toLowerCase();
//
// switch (month) {
//     case 'january':
//     case 'march': case 'may': case 'july': case 'september': case 'november':
//         alert(month.charAt(0).toUpperCase()+month.slice(1)+' has 31 days');
//         break;
//         case 'february':
//             alert(month.charAt(0).toUpperCase()+month.slice(1)+' has 28 days');
//             break;
//             case 'april': case 'june': case 'august': case 'october': case 'december':
//                 alert(month.charAt(0).toUpperCase()+month.slice(1)+' has 31 days');
//             default:
//                 alert('invalid date');
//                 break;
// }