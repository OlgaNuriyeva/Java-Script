let dayDistance = 3;
let nightDown = -2;
let distance = 0; //was 0
let wallHeight = 5;
let days = 0;

// if ((distance += dayDistance) <= 5) {
//   days++;
//   console.log(`Current distance at the end of the day for day ${days} is ${distance} meters`);
//   distance += nightDown;
// }
// if ((distance += dayDistance) <= 5) {
//   days++;
//   console.log(`Current distance at the end of the day for day ${days} is ${distance} meters`);
//   distance += nightDown;
// }
// if ((distance += dayDistance) <= 5) {
//   days++;
//   console.log(`Current distance at the end of the day for day ${days} is ${distance} meters`);
//   distance += nightDown;
// }
// if ((distance += dayDistance) <= 5) {
//   days++;
//   console.log(`Current distance at the end of the day for day ${days} is ${distance} meters`);
//   distance += nightDown;
// } else { 
//   console.log('Finish'); }

while ((distance += dayDistance) <= wallHeight) {
      days++;
      console.log(`Current distance at the end of the day for day ${days} is ${distance} meters`);
      if (distance==wallHeight) console.log('Finish!');
      else console.log('Go forward!') 
      distance += nightDown;
      }
  
console.log(days);

