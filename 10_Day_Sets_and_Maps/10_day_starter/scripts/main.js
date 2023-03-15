const emptyset = new Set ();
for (let i = 1 ; i<= 10 ; i++){
    emptyset.add(i);
}
console.log(emptyset);
emptyset.delete(1);
console.log(emptyset);
emptyset.clear();
console.log(emptyset);

arr = ['a','b','c','d','e'];
const alphbet = new Set(arr);
console.log(alphbet);
const countries = ['Finland', 'Sweden', 'Norway'];

const countriesAndNumber = new Map();

countries.forEach((elem)=> {
    countriesAndNumber.set(elem, elem.length)
});

console.log(countriesAndNumber);

// let i = 0;
// for (const country of countries){
//
//     countriesAndNumber.set(countries[i],countries[i].length);
//     i++;
// }
// console.log(countriesAndNumber);
//
