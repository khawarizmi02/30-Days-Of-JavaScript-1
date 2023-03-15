// for (i = 0 ; i < 10 ; i++){
//     console.log(i);
// }
// i = 0;
// while (i < 10 ){
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i < 10);
//
// #
// ##
// ###
// ####
// #####
// ######
// #######
// let arr = "";
// for (i = 0 ; i < 8 ; i++){
//         arr += "#";
//         console.log(arr);
// }

// for (i = 0 ; i <= 10;i++ ){
//         console.log(i , '*', i,'=',i*i);
// }

 // for (i = 0 ; i <= 10;i++ ){
 //         console.log(i, ' ' , i*i , ' ', i*i*i);
 // }
//
// for (i = 0 ; i <= 100 ; i++){  for ( i=2; i<100; i++)
//     for ( j=2; j*j<=i; j++)
//     {
//         if (i % j === 0)
//             break;
//         else if (j+1 > Math.sqrt(i)) {
//            console.log(i) ;
//         }
//
//     }
// }
// let total = 0;
// for (i = 1 ; i <= 100 ; i++){
//    total += i;
// }
// console.log(total);

// let evennum= 0;
// let odd = 0;
// for (i = 1 ; i <= 100 ; i++){
//     if (i % 2 === 0){
//         evennum += i;
//     }
//     else
//     {
//         odd += i;
//     }
// }
// console.log('total even number : ', evennum);
// console.log('total odd number : ' , odd );

// let arr = [];
// for (i = 0 ; i < 5 ; i++){
//    arr.push(Math.random());
// }
// console.log(arr);


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let arr = [];
for (i = 1 ; i <= 6 ; i++){
  arr += characters.charAt(Math.floor(Math.random()*characters.length));
}

console.log(arr);