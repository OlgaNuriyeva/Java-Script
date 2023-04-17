function drawStairs(n) {
  let str = ""
 for (let i=1; i<=n; i++) {
    for (let j=1; j<i; j++) {
    str +=" "}
    if (i == n) {
      str += "I" 
    }
    else {str +="I\n"}
     }
     return str
}
console.log(drawStairs(7));