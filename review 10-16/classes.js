// // Declaration
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     calcArea(){
//         return this.width*this.height;
//     }
//   }

// class Square extends Rectangle{
//     constructor(side){
//         this.side = side;
//     }
//     calcArea(){
//         return this.side*this.side;
//     }
// }

// //Any new instance of a class has its constructor function ran 

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this.name} meows.`)
    }
  }
  const c = new Cat("Pluto");
  c.speak();