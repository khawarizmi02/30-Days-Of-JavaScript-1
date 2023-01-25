// // // // // this is your main.js script
// // // //     const PI = 3.14
// // // // let radius = 100          // length in meter
// // // //
// // // // //Let us calculate area of a circle
// // // // const areaOfCircle = PI * radius * radius
// // // // console.log(areaOfCircle)  //  314 m
// // // //
// // // //
// // // // const gravity = 9.81      // in m/s2
// // // // let mass = 72             // in Kilogram
// // // //
// // // // // Let us calculate weight of an object
// // // // const weight = mass * gravity
// // // // console.log(weight)        // 706.32 N(Newton)
// // // //
// // // // const boilingPoint = 100  // temperature in oC, boiling point of water
// // // // const bodyTemp = 37       // body temperature in oC
// // // //
// // // //
// // // // // Concatenating string with numbers using string interpolation
// // // // /*
// // // //  The boiling point of water is 100 oC.
// // // //  Human body temperature is 37 oC.
// // // //  The gravity of earth is 9.81 m/s2.
// // // //  */
// // // // console.log(
// // // //   `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
// // // // )
// // //
// // // // console.log(3 > 2)              // true, because 3 is greater than 2
// // // // console.log(3 >= 2)             // true, because 3 is greater than 2
// // // // console.log(3 < 2)              // false,  because 3 is greater than 2
// // // // console.log(2 < 3)              // true, because 2 is less than 3
// // // // console.log(2 <= 3)             // true, because 2 is less than 3
// // // // console.log(3 == 2)             // false, because 3 is not equal to 2
// // // // console.log(3 != 2)             // true, because 3 is not equal to 2
// // // // console.log(3 == '3')           // true, compare only value
// // // console.log(3 === '3')          // false, compare only value and data type
// // // let value = 3;
// // // console.log(3 === value)          // false, compare both value and data type
// // // console.log(3 !== '3')          // true, compare both value and data type
// // // console.log(3 != 3)             // false, compare only value
// // // console.log(3 !== 3)            // false, compare both value and data type
// // // console.log(0 == false)         // true, equivalent
// // // console.log(0 === false)        // false, not exactly the same
// // // console.log(0 == '')            // true, equivalent
// // // console.log(0 == ' ')           // true, equivalent
// // // console.log(0 === '')           // false, not exactly the same
// // // console.log(1 == true)          // true, equivalent
// // // console.log(1 === true)         // false, not exactly the same
// // // console.log(undefined == null)  // true
// // // console.log(undefined === null) // false
// // // console.log(NaN == NaN)         // false, not equal
// // // console.log(NaN === NaN)        // false
// // // console.log(typeof NaN)         // number
// // //
// // // console.log('mango'.length == 'avocado'.length)  // false
// // // console.log('mango'.length != 'avocado'.length)  // true
// // // console.log('mango'.length < 'avocado'.length)   // true
// // // console.log('milk'.length == 'meat'.length)      // true
// // // console.log('milk'.length != 'meat'.length)      // false
// // // console.log('tomato'.length == 'potato'.length)  // true
// // // console.log('python'.length > 'dragon'.length)   // false
// //
// // let isRaining = true
// // isRaining
// //     ? console.log('You need a rain coat.')
// //     : console.log('No need for a rain coat.')
// // isRaining = false
// //
// // isRaining
// //     ? console.log('You need a rain coat.')
// //     : console.log('No need for a rain coat.')
//
// let number = 5
// number > 0
//     ? console.log(`${number} is a positive number`)
//     : console.log(`${number} is a negative number`)
// number = -5
//
// number > 0
//     ? console.log(`${number} is a positive number`)
//     : console.log(`${number} is a negative number`)

// alert('Welcome to 30DaysOfJavaScript') // alert message that will be displayed
//
// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// const now = new Date()
// console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
//
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())
// console.log(now.getTime())
// console.log(now.getTimezoneOffset())
// console.log(now.getDay())

// const allSeconds = Date.now() //
// console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
//
// const timeInSeconds = new Date().getTime()
// console.log(allSeconds == timeInSeconds) // true
//
// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)
//
// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

