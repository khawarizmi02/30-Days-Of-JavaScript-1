// function Fullname (){
//     console.log('MUHAMMAD KHAWARIZMI BIN JEFRI');
// }
// Fullname();
//
// function Fullname (fname,lname){
//     let name = fname + ' ' + lname;
//     console.log(name);
// }
// Fullname('KHAWARIZMI','JEFRI');
//
// function loop (n,m){
//     if (n > m) return;
//     console.log(n);
//     loop(++n, m);
// }
//
// loop(1,10);

// // recursion for pattern
// function loop (n,m,arr){
//     if (n > m) return;
//     arr += '#';
//     console.log(arr);
//     loop(++n,m,arr);
// }
// let arr = '';
// loop (1,5,arr);
//
// function findMax (n1,n2,n3){
//     let max = 0;
//     if (n1 > max){max = n1}
//     if (n2 > max){max = n2}
//     if (n3 > max){max = n3}
//     return(max);
// }
// console.log(findMax(0, 10, 5));
// console.log(findMax(0, -10, -2));

// function solveQuadratic(a=0,b=0,c=0){
//
//     x =(-b + Math.sqrt(b*b - 4*a*c)) / (2*a);
//     y =(-b - Math.sqrt(b*b - 4*a*c)) / (2*a);
//     return {x,y}
// }

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
