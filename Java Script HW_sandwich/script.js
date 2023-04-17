console.log('Welcome to our self service sandwich bar!\n');

let sandwichSalmon = 'Sandwich with salmon';
let sandwichHam = 'Sandwich with ham';
let sandwichBeef = 'Sandwich with beef';

let bread = ['Rye bread', 'Multigrain bread', 'Gluten free bread'];
let filling = ['Salmon', 'Ham', 'Beef'];
let vegetables = ['Tomato', 'Lettuce', 'Onion', 'Cucumber'];
let cheese = ['Cheddar', 'Gauda', 'Mozzarella'];
let souce = ['Mayonnaise', 'Ketchup', 'Mustard'];

let customerSandwichOption = sandwichSalmon;
let customerBreadOption = 'Rye bread';
let customerSouceOption = 'Mayonnaise';
let customerFillingOption = 'Salmon';
let customerCheeseOption = 'Mozzarella';
let customerVegetablesOption = 'Tomato';

console.log(
  '\nPlease see below our price list. \nPrice of the sandwich will depend on which products you would likе to put in to it. \n'
);
console.log('\n***********************');

function breadPrice() {
  for (let i = 0; i < bread.length; i++) {
    if (bread[i] == 'Rye bread' || customerBreadOption == 'Rye bread') {
      console.log(`Price of ${bread[i]} is 2 USD.`);
    } else if (
      bread[i] == 'Multigrain bread' ||
      customerBreadOption == 'Multigrain bread'
    ) {
      console.log(`Price of ${bread[i]} is 3 USD.`);
    } else if (
      bread[i] == 'Gluten free bread' ||
      customerBreadOption == 'Gluten free bread'
    ) {
      console.log(`Price of ${bread[i]} is 4 USD.`);
    } else console.log('Please choose a bread');
  }
}
breadPrice();

console.log('\n***********************');
function fillingPrice() {
  for (let i = 0; i < filling.length; i++) {
    if (filling[i] == 'Salmon' || customerFillingOption == 'Salmon') {
      console.log(`Price of ${filling[i]} is 8 USD.`);
    } else if (filling[i] == 'Ham' || customerFillingOption == 'Ham') {
      console.log(`Price of ${filling[i]} is 4 USD.`);
    } else if (filling[i] == 'Beef' || customerFillingOption == 'Beef') {
      console.log(`Price of ${filling[i]} is 6 USD.`);
    } else console.log('Please choose a filling');
  }
}
fillingPrice();

console.log('\n***********************');

function cheesePrice() {
  let result = 1;
  for (let i = 0; i < cheese.length; i++) {
    if (cheese[i] == 'Cheddar' || customerCheeseOption == 'Cheddar') {
      console.log(`Price of ${cheese[i]} is ${result * 2} USD.`);
    } else if (cheese[i] == 'Gauda' || customerCheeseOption == 'Gauda') {
      console.log(`Price of ${cheese[i]} is ${result * 1} USD.`);
    } else if (
      cheese[i] == 'Mozzarella' ||
      customerCheeseOption == 'Mozzarella'
    ) {
      console.log(`Price of ${cheese[i]} is ${result * 1.5} USD.`);
    } else 'Please shoose a cheese';
  }
}
cheesePrice();

console.log('\n***********************');

console.log(
  'You can choose which vegetables and souce to put in to the sandwich. All are free of charge.'
);
console.table(vegetables);
console.table(souce);

//Recipe
let step1 = `We take a freshly baked ${customerBreadOption}.`;
let step2 = `We spread the ${customerSouceOption} on to the ${customerBreadOption}.`;
let step3 = `We put the ${customerFillingOption} on to the ${customerBreadOption} with ${customerSouceOption} .`;
let step4 = `We put several slices of ${customerCheeseOption} on to the ${customerFillingOption}.`;
let step5 = `We put ${customerVegetablesOption} on the top of the ${customerSandwichOption} and cover it with the second slice of ${customerBreadOption}.`;

function makeSandwich() {
  let recipe = `\n${step1} \n${step2}\n${step3}\n${step4}\n${step5}`;
  return recipe;
}
makeSandwich();

console.log('\n***********************');
console.log(
  `\nThanks for your order! Lets start making the ${customerSandwichOption}.`
);
console.log(makeSandwich());

function breadPriceForCheck() {
  let result = 1;
  if (customerBreadOption == 'Rye bread') {
    result += 1;
  } else if (customerBreadOption == 'Multigrain bread') {
    result += 2;
  } else if (customerBreadOption == 'Gluten free bread') {
    result += 3;
  }
  return result;
}

function fillingPriceForCheck() {
  let result = 2;
  if (customerFillingOption == 'Salmon') {
    result *= 4;
  } else if (customerFillingOption == 'Ham') {
    result *= 2;
  } else if (customerFillingOption == 'Beef') {
    result *= 3;
  }
  return result;
}

function cheesePriceForCheck() {
  let result = 1;
  if (customerCheeseOption == 'Cheddar') {
    result *= 2;
  } else if (customerCheeseOption == 'Gauda') {
    result *= 1;
  } else if (customerCheeseOption == 'Mozzarella') {
    result *= 1.5;
  }
  return result;
}

console.log(`\nPrice of your ${customerSandwichOption} is the following:\n`);
console.log(`You've chosen ${customerBreadOption}.`);
console.log(`It's price is ${breadPriceForCheck()} USD.\n`);
console.log(`You've chosen ${customerFillingOption}.`);
console.log(`It's price is ${fillingPriceForCheck()} USD.\n`);
console.log(`You've chosen ${customerCheeseOption}.`);
console.log(`It's price is ${cheesePriceForCheck()} USD.\n`);
console.log(
  `You've chosen ${customerVegetablesOption} & ${customerSouceOption}. Both are for free.`
);
console.log(
  `So, totally, you need to pay ${
    breadPriceForCheck() + fillingPriceForCheck() + cheesePriceForCheck()
  } USD.`
);
console.log('We hope to see you soon again at our Sandwich bar! :-)');
