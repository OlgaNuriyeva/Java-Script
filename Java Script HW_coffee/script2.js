let latteCoffee = 'Latte';
let cappucinoCoffee = 'Cappucino';
let americanoCoffee = 'Americano';
let smallCup = 'small cup 50ml.';
let mediumCup = 'medium cup 100 ml.';
let bigCup = 'big cup 150 ml.';

let cup = 'cup for coffee';
let coffee = 'Brazilian roasted coffee beans';
let water = 'fresh water';
let sugar = 'sugar';
let milk = 'milk';
let creame = '2.5% cream';
let spoon = 'spoons';
let topping = 'caramel';
let lactoseFreeMilk = 'almond milk';
let price = 1;
let paymentType = ['in USD by cash','in USD by card', 'in USD converted in to beatcoin'];
let paymentOption = 'in USD converted in to beatcoin' ;
let customerChoiceCupSize = bigCup;
let customerChoiceCoffee = americanoCoffee;

  
//Greeting
function greeting() {
  console.log(`Welcome to our Coffee Shop! \n
Please enjoy the taste and variety of our coffee: ${latteCoffee}, ${cappucinoCoffee}, ${americanoCoffee}. \n`);
  console.log(
    'Please choose one of the coffee types and cup size before an order.\n'
  );
}
greeting();

//Resipe
let step1 = `We take a ${customerChoiceCupSize} to make our tasty ${customerChoiceCoffee}.`;
let step2 = `We add ${water} in to the coffe machine.`;
let step3 = `We use the best quality ${coffee} and grind it at the coffee machine.`;
let step4 = `We add 20ml. of ${milk} in to the cappucinatore glass.`;
let step5 = `We add 40ml. of ${creame} in to the cappucinatore glass.`;
let step6 = `We add 2 ${spoon} of ${sugar}.`;
let step7 = `We add 2 ${spoon} of ${topping}.`;
let step8 = `We use lactose-free ${lactoseFreeMilk} and add it in to the cappucinatore glass.`;
let step9 = `We turn the coffee machine ON and wait for our ${customerChoiceCoffee} to be ready in a minute.`;

function latteCoffeeRecipe() {
  let list = `${step1} \n${step2} \n${step3}\n${step4}\n${step6}\n${step7}\n${step9}\n`;
  return list;
}

function cappucinoCoffeeRecipe() {
  let list = `${step1} \n${step2} \n${step3}\n${step5}\n${step6}\n${step9}\n`;
  return list;
}

function americanoCoffeeRecipe() {
  let list = `${step1} \n${step2} \n${step3}\n${step9}\n`;
  return list;
}

function latteCoffeeLactoseFreeRecipe() {
  let list = `${step1} \n${step2} \n${step3}\n${step8}\n${step6}\n${step7}\n${step9}\n`;
  return list;
}

function cappucinoLactoseFreeCoffeeRecipe() {
  let list = `${step1} \n${step2} \n${step3}\n${step8}\n${step6}\n${step9}\n`;
  return list;
}

//Pricelist

function smallCupPrice() {
  let result = price * 2;
  return result;
}
smallCupPrice();

function mediumCupPrice() {
  let result = price * 3;
  return result;
}
mediumCupPrice();

function bigCupPrice() {
  let result = price * 4;
  return result;
}
bigCupPrice();

console.log('Our price list in USD is the following:\n');
console.log(`${latteCoffee} ${smallCup}`+ " " +"is "+ smallCupPrice() + " USD.");
console.log(`${latteCoffee} ${mediumCup}`+ " " +"is "+ mediumCupPrice()+ " USD.");
console.log(`${latteCoffee} ${bigCup}` + " " +"is "+ bigCupPrice()+ " USD.");
console.log(`${cappucinoCoffee} ${smallCup}` + " " +"is "+ smallCupPrice()+ " USD.");
console.log(`${cappucinoCoffee} ${mediumCup}`+ " " +"is "+  mediumCupPrice()+ " USD.");
console.log(`${cappucinoCoffee} ${bigCup}`+ " " +"is "+ bigCupPrice()+ " USD.");
console.log(`${americanoCoffee} ${smallCup}` + " " +"is "+ smallCupPrice()+ " USD.");
console.log(`${americanoCoffee} ${mediumCup}`+ " " +"is "+ mediumCupPrice()+ " USD.");
console.log(`${americanoCoffee} ${bigCup}` + " " +"is "+ bigCupPrice()+ " USD.");

console.log('\nWe have an unique recipe for each coffee:\n');
console.log(`${latteCoffee}\n` + latteCoffeeRecipe());
console.log(`${cappucinoCoffee}\n` + cappucinoCoffeeRecipe());
console.log(`${americanoCoffee}\n` + americanoCoffeeRecipe());
console.log('\nWe can also offer lactose-free coffee to our beloved customers: \n');
console.log(`${latteCoffee} lactose-free\n` + latteCoffeeLactoseFreeRecipe());
console.log(`${cappucinoCoffee} lactose-free\n` + cappucinoLactoseFreeCoffeeRecipe() );


// function paymentMethod(paymentType) {
function paymentMethod() {
for (let i=0; i<paymentType.length; i++)
  if (paymentType[i] == 'in USD by cash' && customerChoiceCupSize == smallCup)
  {console.log(`\nPlease pay for your ${customerChoiceCoffee} an amount ${paymentOption} equal to`
  + " " + smallCupPrice() +" USD.")}
  else if (paymentType[i] == 'in USD by cash' && customerChoiceCupSize == mediumCup)
  {console.log(`\nPlease pay for your ${customerChoiceCoffee} an amount ${paymentOption} equal to`
  + " " + mediumCupPrice() +" USD.")}
  else if (paymentType[i] == 'in USD by cash' && customerChoiceCupSize == bigCup)
  {console.log(`\nPlease pay for your ${customerChoiceCoffee} an amount ${paymentOption} equal to`
  + " " + bigCupPrice() +" USD.")}
}
paymentMethod()

function finalMessage() {
  console.log(
    `\n\nWe hope, you will enjoy your ${customerChoiceCoffee} and we will see you again in our Coffee Shop very soon!`
  );
}
finalMessage();
