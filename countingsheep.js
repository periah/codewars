function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
 const sheep = arrayOfSheep.filter(i => {
  return i ===true
})
const sum = sheep.reduce((total, amount) => total + amount, 0);
return sum

  }
