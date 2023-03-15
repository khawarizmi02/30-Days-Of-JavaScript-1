// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//     '%c30 Days%c %cOf%c %cJavaScript%c',
//     'color:green',
//     '',
//     'color:red',
//     '',
//     'color:yellow'
// ) // log output green red and yellow text
//
// console.warn('this is warning');
// console.error('this is error');
// const table = ['ahmad','abu','ali'];
// console.table(table);
// const users = [
//     {
//         name: 'Asabeneh',
//         title: 'Programmer',
//         country: 'Finland',
//         city: 'Helsinki',
//         age: 250
//     },
//     {
//         name: 'Eyob',
//         title: 'Teacher',
//         country: 'Sweden',
//         city: 'London',
//         age: 25
//     },
//     {
//         name: 'Asab',
//         title: 'Instructor',
//         country: 'Norway',
//         city: 'Oslo',
//         age: 22
//     },
//     {
//         name: 'Matias',
//         title: 'Developer',
//         country: 'Denmark',
//         city: 'Copenhagen',
//     }
// ]
// console.table(users)
//

//
// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
//
// console.time('Regular for loop');
// for (const country of countries){
//     console.log(country);
// }
// console.timeEnd('Regular for loop');
//
// console.info('this is an info');
// for (let i = 0; i <= 10; i += 1) {
//     let errorMessage = `${i} is not even`
//     console.log('the # is ' + i)
//     console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
// }

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
// }
// const users = [
//     {
//         name: 'Asabeneh',
//         title: 'Programmer',
//         country: 'Finland',
//         city: 'Helsinki',
//         age: 250
//     },
//     {
//         name: 'Eyob',
//         title: 'Teacher',
//         country: 'Sweden',
//         city: 'London',
//         age: 25
//     },
//     {
//         name: 'Asab',
//         title: 'Instructor',
//         country: 'Norway',
//         city: 'Oslo',
//         age: 22
//     },
//     {
//         name: 'Matias',
//         title: 'Developer',
//         country: 'Denmark',
//         city: 'Copenhagen',
//         age: 28
//     }
// ]
//
// console.group('Names')
// console.log(names)
// console.groupEnd()
//
// console.group('Countries')
// console.log(countries)
// console.groupEnd()
//
// console.group('Users')
// console.log(user)
// console.log(users)
// console.groupEnd()
