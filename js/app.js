'use strict';
console.log('Hello World');
 
//globally scoped variable accessible to the entire file.
let catName;
let message;

function getCatName(){
//codde block within the {}




catName = prompt('Hello! What is your cat\'s name?');
console.log('What is our input for user cat\'s name: ', catName);

let nameConfirm = confirm('Is that really the name of your cat?');
console.log('Did they confirm? ', nameConfirm);
}

// function keyword  and the function name, then () and {}

function getUserTime(){

let time = prompt('What hour is it in Military time?');
console.log('User time is: ', time);

if(time <= 11){
 message = 'Top O\' da Mornin\' to ya! Time to feed your kitty!';
}
else if (time > 12 && time <= 17){
 message = 'G\'Day Mate! Time to change the litter box.';
}
else if (time > 18 && time < 24){
 message = 'Nighty Night! Time to give your kitty some snuggies!';
}
else {
 message = 'Hello, I dont know your time, but it\'s always a good time to give your cat some love.';
}
console.log('our message from if else condition is: ', message);

}
//invoke our functions we call the function to run it. 
getCatName();
getUserTime();


document.write('Hello ' + catName +'\'s' + ' owner' + '! ' + message);

