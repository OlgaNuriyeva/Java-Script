let ticketPrice = 80;
let adultPass, infantPass, childPass, retiredPass;
let passengerAge = 80;

if (passengerAge >= 18 && passengerAge < 65) {
  console.log(`Your ticket price is ${ticketPrice}Dollars.`);
} else if (passengerAge < 2 && passengerAge >= 0) {
  console.log(`Your ticket price is ${ticketPrice * 0.1} Dollars.`);
} else if (passengerAge >= 2 && passengerAge < 18) {
  console.log(`Your ticket price is ${ticketPrice * 0.5} Dollars.`);
} else if (passengerAge >= 65) {
  console.log(`Your ticket price is ${ticketPrice * 0.6} Dollars.`);
} else {
  console.log('Please repeat how old are you?');
}
