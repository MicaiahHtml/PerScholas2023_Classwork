////////////////////////////////
// Easy Going
////////////////////////////////


for(let i = 0; i <= 20; i++) console.log(i);


////////////////////////////////
// Get Even
////////////////////////////////

for(let i = 0; i <= 200; i+=2) console.log(i);


////////////////////////////////
// Fizz Buzz
////////////////////////////////


const fb = [];
for(let i = 1; i <= 100; i++){
  if(i%3 == 0 & i%5 == 0){
  	fb.push("fizzbuzz");
  }
  else if(i%3 == 0){
		fb.push("fizz");
  } else if(i%5 == 0){
    fb.push("buzz");            
  } else{
    fb.push(i);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0] = "Gameboy";


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const element of ninjaTurtles) console.log(element.toUpperCase());


////////////////////////////////
// Methods, Revisited
////////////////////////////////

let favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf("Titanic"));
console.log(favMovies.sort());
console.log(favMovies.pop());
console.log(favMovies.reverse());
console.log(favMovies.shift());
console.log(favMovies.unshift());
console.log(favMovies.splice(favMovies.indexOf("Django"), 0, "Avatar"));
const slicedMovies = favMovies.slice(0, favMovies.length/2);
console.log(slicedMovies);
console.log(slicedMovies.indexOf("Fast and Furious"));


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////