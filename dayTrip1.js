"use strict"
//destinations
function cities(){
    let closeBy = ['San Francisco', 'Los Angeles', 'Santa Cruz', 'Napa Valley', 'Sacramento'];
    let restaurants = closeBy [Math.floor((Math.random() *closeBy.length))];
    return restaurants;

}
 //Food
 function eatAtRestaurants(){
     let foodChoices = ['Pizza', "Mexican Food", 'Italian Food', 'Chinese Buffet', 'Seafood', 'Mediterranean'];
     let randomRestaurant = foodChoices[Math.floor(Math.random()*foodChoices.length)];
     return randomRestaurant;

 }

 //Transportation
 function transportation(){
    let choiceTransportation = ['Car', 'Bus', 'Uber', 'Lyft', 'Bike'];
    let randomTransportation = choiceTransportation [Math.floor((Math.random() *choiceTransportation.length))];
    return randomTransportation;
 } 

 //Entertainment
 function funFun(){
     let toDo = ['Beach', 'Hiking', 'Paintball', 'Movies', 'Fishing'];
     let randomFun = toDo [Math.floor((Math.random() *toDo.length))];
     return randomFun;
 }

let destinations = cities();
let restaurants = eatAtRestaurants();
let transportations = transportation();
let entertainment = funFun();
let select = youSure();

//Confirm Trip
function dayTrip(){
    if(seletion == true){
        console.log("Your Day trip is completed: You will be taking " + transportation + " to " + destinations + "Getting a bite to eat" + restaurants + " to eat " + " entertainment of " + entertainment + " does that sound good");
        return choice;
    }
    else{
        destinations = closeBy();
        transportation = transportation();
        restaurants = eatAtRestaurants();
        entertainment = funFun();
        select = youSure();
        dayTrip();
    }
}
dayTrip();