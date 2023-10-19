// //I understand all topics. Any missing code was done in class.

// let firstVariable = "Hello World";
// firstVariable = 5;
// let secondVariable = firstVariable;
// secondVariable = "Hello World";
// //B6: firstVariable = 5
// let yourName = "Micaiah";
// console.log(`Hello, my name is ${yourName}`);


// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log("4" === '4');

// let animal = "cow";
// if(animal = "cow"){
//     console.log("MOOOO");
// }else{
//     console.log("Hey! You're not a cow.");
// }
// let age = 3;
// if(age >= 16){
//     console.log("Here are the keys!");
// }else{
//     console.log("Sorry, you're too young.");
// }


// for(let i = 0; i < 11; i++){
//     console.log(i);
// }

// for(let i = 10; i < 401; i++){
//     console.log(i);
// }

// for(let i = 12; i < 4001; i += 3){
//     console.log(i);
// }

// for(let i = 1; i < 101; i++){
//     (i % 2 === 0) ? console.log(`${i} <--- is an even number!`) : console.log(i);
// }

// for(let i = 1; i < 101; i++){
//     if (i % 3 === 0) console.log(`I found a ${i}. Three is a crowd`);
//     if (i % 5 === 0) console.log(`I found a ${i}. High five!`);
// }

// // =========================================
// // D. Savings Account
// // =========================================
// // Write code that will save the sum of all of the numbers between 1 - 10 to a variable 
// // called bank_account
// // at the end, bank_account should have $55 in it
// // let bank_account = 0;
// // console.log('bank_account before the for loop: ', bank_account);
// // for (let i=1; i<=10; i++) {
// //     bank_account = bank_account + i;
// //     console.log('in the for loop, and i is: ', i);
// //     console.log('bank_account is: ', bank_account);
// // }
// // console.log(bank_account);

// // You got a bonus!
// // sum all the numbers between 1 - 100 multiplied by 2
// let bank_account = 0;
// console.log('bank_account before the for loop: ', bank_account);
// for (let i=1; i<=100; i++) {
//     bank_account = bank_account + i*2;
//     console.log('in the for loop, and i is: ', i);
//     console.log('bank_account is: ', bank_account);
// }
// console.log(bank_account);


// let quotes = ["Be yourself; everyone else is already taken.", "To live is the rarest thing in the world. Most people exist, that is all.", "Be the change that you wish to see in the world."];





// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!");

// //2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

// kristynsCloset.splice(6,0,"raybans");


// //3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

// kristynsCloset[5] = "stained knit hat";
// // console.log(kristynsCloset);

// thomsCloset[1][2] = "Footie Pajamas";

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2]+ ", and " + thomsCloset[2][2]+ "!");

// // ==================================================
// // SECTION IV 
// //      FUNCTIONS
// // ==================================================

// // =========================================
// // A. printGreeting
// // =========================================
// // Do you think you could write a function called printGreetingwith a parameter name
// // that returns a greeting with the argument interpolated into the greeting?
// // -- Defining the function printGreeting
// // -- name is a parameter that we are passing in
// // -- return a greeting
// // -- argument interpolated
// //          embed the variable into the string
// //          "This is just a string" and you can concatenate
// //          `This is a string with ${variable}`
// function printGreeting(name) {
//     return `Hello there, ${name}`;
//     // return 'Hello there, ${}'
// }

// // =========================================
// // B. printCool
// // =========================================
// // Write a function printCoolthat accepts one parameter, nameas an argument. 
// // The function should print the name and a message saying that that person is cool.
// function printCool(name) {
//     // return " " + name + " is  cool";
//     return ` ${name} is cool`;
// }

// // console.log(printGreeting("Slimer"));
// // console.log('i can do things in between');



// // console.log(printCool("Captain Reynolds"));

// // console.log(printGreeting('Elle'));

// // =========================================
// // C. calculateCube
// // =========================================
// // Write a function calculateCubethat takes a single number and 
// // prints the volume of a cube made from that number.
// //  -- parameter that is a number 
// //  -- CALCULATE THE volume
// //  -- print the volume
// function calculateCube(number) {
//     console.log(number * number * number);
// }

// // actually executing and passing in a 6
// // calculateCube(6);

// // invoke to find volume of cube with side 4
// // calculateCube(4);


// function isVowel(letter){
//     let ret = (["a","e","i","o","u"].includes(letter)) ? true : false;
//     return ret;
// }
// console.log(isVowel("u"));


// function getTwoLengths(s1, s2){
//     return[s1.length, s2.length];
// }

// console.log(getTwoLengths("hrk","helloWORLD"));

// // Part F

// function getMultipleLengths(arr){
//     let lengthArr = [];
//     arr.forEach((element) => lengthArr.push(element.length));
//     return lengthArr;
// }

// console.log(getMultipleLengths(["kjadgn","kajeng","kahd","akjdng","HELLOWORLD","abc"]));

// //PART G
// function maxOfThree(a, b, c){
//     if((a >= b) && (a >= c)){
//         return a;
//     }else if((b >= a) && (b >= c)){
//         return b;
//     }else if((c >= a)&&(c >= b)){
//         return c;
//     }
// }

// console.log(maxOfThree(2953,23975,287));

// //PART H - last part
// function printLongestWord(arr){
//     return(arr.sort((a,b) => {
//         if(a.length > b.length){
//             return -1;
//         }else if (a.length < b.length){
//             return 1;
//         } return 0;
//     })[0]);
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// // ==================================================
// // SECTION V 
// //      OBJECTS
// // ==================================================

// // =========================================
// // A. Make a user object
// // =========================================

// // Create an object called user.
// // Write in to the object the key-value pairs for 
// // name, email, age, and purchased. 
// // Set the value of purchased to an empty array []. 
// // Set the other values to whatever you would like.

// const user = {
//     name: "Mercy",
//     email: "email@something.com",
//     age: 29,
//     purchased: []
// }

// // console.log(user);
// // console.log(user.name);
// // console.log(user.email);
// // console.log(user.age);
// // console.log(user.purchased);

// // B. Update the user
// // Our user has changed his or her email address. 
// // Without changing the original userobject, update the emailvalue to a new email address.
// // Our user has had a birthday! 
// // Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

// // in a string called email, if i want to update it, 
// // email = newValue
// // this is similar, but you need to refer to the user
// user.email = "newEmail@something.com";
// // console.log(user);
// // user.age = user.age + 1;
// user.age++;
// // console.log(user);

// // C. Adding keys and values
// // You have decided to add your user's location to the data that you 
// // want to collect.
// // Without changing the original userobject, 
// // add a new key locationto the object, and give it a value or some-or-other location (a string).
// // object.key = 'value';
// user.location = 'Columbus';
// // console.log(user);

// // D. Shopaholic!
// // Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// // -- when i want to refer to the purchased array in user, i type user.purchased
// // console.log(user.purchased);
// user.purchased.push("carbohydrates");
// // console.log(user.purchased);

// // Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// user.purchased.push("peace of mind");

// // Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// user.purchased.push("Merino jodhpurs");
// // console.log(user.purchased);
// // Console.log just the "Merino jodhpurs" from the purchasedarray.
// // console.log(user.purchased[2]);
// // console.log(user)

// // you can also push multiple elements at the same time
// user.purchased.push("new thing", "another new thing", "more things");
// // console.log(user);


// // E. Object-within-object
// // Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// // If we want to give our user a friendwith a nameand age, we could write:
// // user.friend = {
// //     name: "Grace Hopper",
// //     age: 85
// // }
// // When we console.log user, we would see the friendobject added to our user object.

// // Write a friendobject into your userobject and give the friend a 
// //      name, age, location, and purchased array (empty for now)
// user.friend = {
//     name: "Grace Hopper",
//     age: 85,
//     location: "Columbus",
//     purchased: []
// }
// // console.log(user);
// // console.log(user.friend);
// // Console.log just the friend's name
// // console.log(user.friend.name);
// // Console.log just the friend's location
// // console.log(user.friend.location);
// // CHANGE the friend's age to 55
// user.friend.age = 55;
// // console.log(user.friend.age);
// // console.log(user);
// // The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// user.friend.purchased.push("The One Ring", "A latte");
// // The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// // Console.log just "A latte" from the friend's purchasedarray.
// // console.log(user.friend.purchased[1]);
// console.log(user)
// // F. Loops
// // Write a for loop that iterates over the User's purchasedarray 
// // (NOT the friend's purchased array), and prints each element to the console.
// let arrLength = user.purchased.length;
// for (i=0; i<arrLength; i++) {
//     console.log(user.purchased[i]);
// }
// // Write a for loop that iterates over the Friend's purchasedarray, 
// // and prints each element to the console.
// console.log('**********************')
// arrLength = user.friend.purchased.length;
// for (i=0; i<arrLength; i++) {
//     console.log(user.friend.purchased[i]);
// }
// // G. Functions can operate on objects
// // Write a single function update User that takes no parameters. 
// // When the function is run, it should:
// // it should increment the user's age by 1
// // make the user's name uppercase
// // The function does not need a returnstatement, 
// // it will merely modify the user object.

// function updateUser() {
//     console.log('This is the user in the function')
//     console.log(user);
//     user.age++;
//     user.name = user.name.toUpperCase();
//     console.log(user.name);
// }

// // updateUser();


// // Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// // Call your oldAndLoudfunction with useras the argument.
// function oldAndLoud(person) {
//     person.age++;
//     person.name = person.name.toUpperCase();
// }

// oldAndLoud(user);
// console.log('This is the user after the function')
// console.log(user);


