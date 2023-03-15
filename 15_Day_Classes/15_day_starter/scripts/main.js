class Animal {
  constructor(name, age, color, legProperties) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legProperties = legProperties;
  }
  getInfo (){
    let info = `This is ${this.name}. He is ${this.age} year old and his color is ${this.color}. He has ${this.legProperties} legs.`;
    return info;
  }
}
let animal = new Animal('anjing',20,'blue',4);
console.log(animal.getInfo());