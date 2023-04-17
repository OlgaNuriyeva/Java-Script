let name;
function customGreeting(name) {
  console.log('Hello, ' + name + '!');
  return name;
}
customGreeting('Olga');

function greetCustomer(name) {
  let greetings = `Hi, ${name}! \nWelcome to our caffee!\n`;
  console.log(greetings);
}
greetCustomer('Olga');
