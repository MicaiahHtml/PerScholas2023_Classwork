class Hamster {
    owner = "";
    price = 15;
    constructor(name){this.name = name;}
    wheelRun(){console.log("squeak squeak");}
    eatFood(){console.log("nibble nibble");}
    getPrice(){return this.price;}
}

class Person {
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    bankAccount = 0;
    hamsters = [];
    constructor(name){this.name = name;}
    //these are called getter functions
    getName(){return this.name;}
    getAge(){return this.age;}
    getWeight(){return this.weight;}
    greet(){console.log(`Hi, my name is ${this.name}!`);}
    eat(){
        this.mood++;
        this.weight++;
    }
    exercise(){this.weight--;}
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

let Timmy = new Person("Timmy");
let Gus = new Hamster("Gus");
for(let i = 0; i < 5; i++) Timmy.ageUp();
for(let i = 0; i < 5; i++) Timmy.eat();
for(let i = 0; i < 5; i++) Timmy.exercise();
for(let i = 0; i < 9; i++) Timmy.ageUp();
//Timmy has had low grade depression for 9 years
Gus.owner = Timmy.getName();
Timmy.buyHamster(Gus);
for(let i = 0; i < 15; i++) Timmy.ageUp();
for(let i = 0; i < 2; i++) {Timmy.eat(); Timmy.exercise();}

Timmy.causeOfDeath = "starvation, broke, suicidal, no hobbies";
Gus.mood = Timmy.mood;
Timmy = null;

console.log("nothing happened to Timmy");

class Dinner {
    constructor(appetizer, entree, desert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.desert = desert;
    }
}

class Chef {
    makeDinner(appetizer,entree,desert){
        return new Dinner(appetizer, entree, desert);
    }
}

let myPersonalChef = new Chef();

console.log(myPersonalChef.makeDinner("tots","spaghetti","cake"));
console.log(myPersonalChef.makeDinner("asparagus","tofu stir-fry","pie"));
console.log(myPersonalChef.makeDinner("soup bowl","pot pie","brownie"));