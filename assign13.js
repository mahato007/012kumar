console.log("person1:show ticket");
console.log("person2:show ticket");
const moviez = async () => {
  const promisewifebringTckt = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });
  const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
  const getcandy=new Promise((resolve,reject)=>resolve('candy'));
  const getcoke=new Promise((resolve,reject)=>resolve('coke'));
  let ticket=await promisewifebringTckt;
  let[popcorn,candy,coke]=await Promise.all([getpopcorn,getcandy,getcoke])
  console.log(`${popcorn},${candy},${coke}`);
  return ticket;

}
moviez().then((msg)=>console.log(msg))
console.log("person4:show ticket");
console.log("person5:show ticket");