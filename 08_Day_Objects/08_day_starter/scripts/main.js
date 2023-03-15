// function CheckNum(n,m=1){
//     if (m*m*m === n && m<31){
//         console.log('true');
//
//         return;
//     }
//
//     else if (m > 31){
//         console.log('false');
//         return;
//
//     }
//
//     CheckNum(n,m+1);
//
// }
//
// testCase = [27, 35, 8, 99];
//
// for (const number of testCase) {
//     isPowerOfThree(number);
// }
//
// function isPowerOfThree(n){
//     let m = 1;
//     CheckNum(n,m)
// }
// const person = {
//     fname: "khawa",
//     lname: "jefri",
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     getFullName : function(){
//         return `${this.fname} ${this.lname}`;
//     }
// }
// person.getPersonInfo = function (){
//     let skillWithoutLast = this.skills.splice(0,this.skills.length -1).join(', ');
//     let skillLast = this.skills.splice(this.skills.length -1)[0];
//     let listSkills = skillWithoutLast + ' and ' + skillLast;
//     return listSkills
// }
//
// let copyPerson = Object.assign({},person);
// console.log(copyPerson);
// let keys = Object.keys(person);
// console.log(keys);
// const values = Object.values(person);
// console.log(values);
// const entries = Object.entries(person);
// console.log(entries);
// console.log(person.hasOwnProperty('fname'));

// // object name dog
// const dog = {
//     name : 'anjing',
//     age : 19,
//     breed : 'jalanan',
//     getBark : function (){
//         let bark = 'woof woof';
//         return bark;
//     },
//     getDogInfo : function(){
//         let info = `This is a dog name ${this.name}. He is ${this.age} years old and he is ${this.breed} dog breed. He can ` + this.getBark() + `.`;
//         return info;
//     }
// }
// console.log (dog.getDogInfo());

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}



let maxSkill = 0;
let userWithMaxSkill = null;

for (const user in users) {
    // let currentUser = users[user];

    console.log(`Current user is ${user}`)

    for( const elem in users[user]) {
        console.log(`${elem} -> ${users[user][elem]}`)
    }
    console.log('##########')


    // if (currentUser.skills.length > maxSkill) {
    //     maxSkill = currentUser.skills.length;
    //     currentUser.hisname = user;
    //     userWithMaxSkill = currentUser;
    // }
}
