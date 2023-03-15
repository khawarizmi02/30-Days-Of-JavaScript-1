// let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
// const pattern = /\d+/g;
// let result = text.match(pattern);
// let realResult = result.map(elem => Number(elem));
// let [monthly,annuay,online] = realResult;
// let annualincome = monthly*12 + annuay + online*12;
// console.log(annualincome);
//
// let text = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';
// const pattern = /-?[0-9]+/g;
// let result = text.match(pattern);
// console.log(result);
// let max = Math.max(...result);
// let min = Math.min(...result);
// let distance = max - min;
// console.log(distance);

function is_valid_variable (text){
    let pattern = /^[a-z_][a-z0-9_]+$/;
    console.log(pattern.test(text));
}
is_valid_variable('first_name') //# True
is_valid_variable('first-name') //# False
is_valid_variable('1first_name') //# False
is_valid_variable('firstname') //# True