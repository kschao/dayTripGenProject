"use strict"

prompt("Welcome to 'Day Trip Generator in California! Click OK to start");

let name= prompt ("What is your name?");

let destination = ["San Francisco", "Emeryville", "Los Angeles", "Santa Cruz", "Napa Valley", "Sacramento"];
let ran_destination = destination[Math.floor(Math.random()*restaurant.length)];
prompt("You will be in the city of...",ran_destination);


let restaurant = ["Pizza", "Mexican Food", "Chinese Buffet", "Sushi", "Italian", "Mediterranean", "Wings", "Seafood"];
let rand_rest = restaurant[Math.floor(Math.random()*restaurant.length)];
prompt("You will be dining in at...",rand_rest);


let transportation = ["Bus", "Taxi", "Uber", "Lyft", "Rental", "Bike"];
let rand_trans = transportation[Math.floor(Math.random()*transportation.length)];
prompt("You will take the...",rand_trans);

let entertainment = ["Comedy Club", "Movies", "Arcade Center", "Beach", "Amusement Park", "Water Park"];
let rand_enter = entertainment[Math.floor(Math.random()*transportation.length)];
console.log("You will go...", rand_enter);

let final = (name)+ "will begin this exciting trip in" + (ran_destination) + "Later that evening, you will be sitting down to have a delicious meal at" + (rand_rest) + "During the day, you will be utilizing a/an" + (rand_trans) + "to see all the beautiful sites. Lastly, you will make fun memories at" + (rand_enter) + "Hope you enjoy your trip. Click OK";
prompt(final);
alert(final);
console.log(final);