//Task# 3 Extra task;
let water = 'water';
let cup = 'cup for coffee';
let coffee = 'granulated coffee';
let sugar = 'sugar';
let creame = 'cream';
let topping = 'caramel';

let latteCoffee = 'Latte';
let cappucinoCoffee = 'Cappucino';
let americanoCoffee = 'Americano';

let customerChoice;
let cupSize;
let recipeLatte = `1. We use the fresh ${water} only and boil it till the required condition.\n 2. We take a beautifull ${cup}, put one spoon of ${coffee} and one spoon of ${sugar} in to it.\n 3. We add boiled ${water} in to the ${cup} and then add some 10% ${creame} and ${topping}.`;
let recipeCappucino = `1. We use the fresh ${water} only and boil it till the required condition.\n 2. We take a beautifull ${cup}, put one spoon of ${coffee} and one spoon of ${sugar} in to it.\n 3. We add boiled ${water} in to the ${cup} and then we add some mixed 8% ${creame}.`;
let recipeAmericano = `1. We use the fresh ${water} only and boil it till the required condition.\n 2. We take a beautifull ${cup}, put one spoon of ${coffee} in to it.\n 3. Then we add boiled ${water} in to the ${cup}.`;

let smallCup = 1;
let mediumCup = 2;
let bigCup = 3;
customerChoice = 'Cappucino';
cupSize = 'medium';

console.log('Dear guest! Welcome to our Coffeeshop!');
console.log(
  'Which coffee would you like to drink? Latte, Cappucino, Americano?'
);
console.log('Which cup size do you prefer? Small, medium, big?');

if (customerChoice === 'Latte') {
  if (cupSize === 'small') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${latteCoffee}:\n ${recipeLatte} \n Your ${latteCoffee} is ready. Please enjoy it!``Please pay ${smallCup} USD for it.`
    );
  }
  if (cupSize === 'medium') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${latteCoffee}:\n ${recipeLatte}\n Your ${latteCoffee} is ready. Please enjoy it! Please pay ${mediumCup} USD for it`
    );
  }
  if (cupSize === 'big') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${latteCoffee}:\n ${recipeLatte}\n Your ${latteCoffee} is ready. Please enjoy it! Please pay ${bigCup} USD for it.`
    );
  }
}
if (customerChoice === 'Cappucino') {
  if (cupSize === 'small') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${cappucinoCoffee}:\n ${recipeCappucino}\n Your ${cappucinoCoffee} is ready. Please enjoy it! Please pay ${smallCup} USD for it.`
    );
  }
  if (cupSize === 'medium') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${cappucinoCoffee}:\n ${recipeCappucino}\n Your ${cappucinoCoffee} is ready. Please enjoy it! Please pay ${mediumCup} USD for it.`
    );
  }
  if (cupSize === 'big') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${cappucinoCoffee}:\n ${recipeCappucino}\n Your ${cappucinoCoffee} is ready. Please enjoy it! Please pay ${bigCup} USD for it.`
    );
  }
}
if (customerChoice === 'Americano') {
  if (cupSize === 'small') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${americanoCoffee}:\n ${recipeAmericano}\n Your ${americanoCoffee} is ready. Please enjoy it! Please pay ${smallCup} USD for it.`
    );
  }
  if (cupSize === 'medium') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${americanoCoffee}:\n ${recipeAmericano}\n Your ${americanoCoffee} is ready. Please enjoy it! Please pay ${mediumCup} USD for it.`
    );
  }
  if (cupSize === 'big') {
    console.log(
      `Thanks for your order. Your coffee will be ready in a few minutes.\n Let us show you our uniq recipe of ${americanoCoffee}:\n ${recipeAmericano}\n Your ${americanoCoffee} is ready. Please enjoy it! Please pay ${bigCup} USD for it.`
    );
  }
} else customerChoice || cupSize;
{
  console.log('Please repeat yuor order!');
}
