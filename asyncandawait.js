console.log("person1:show ticket");
console.log("person2:show ticket");
const moviez = async () => {
  const promisewifebringTckt = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });
  const getpopcorn = new Promise((resolve, reject) => resolve("popcorn"));
  const addbutter = new Promise((resolve, reject) => resolve("butter"));
  const coldDrink = new Promise((resolve, reject) => resolve("drink"));

  let ticket = await promisewifebringTckt;
  console.log(`wife:i have the ${ticket}`);
  console.log("husband:should i go in");
  console.log("wife:no i am hungry");

  let popcorn = await getpopcorn;
  console.log(`husband:i getsome ${popcorn}`);
  console.log("husband:we should go in");
  console.log("wife:i need butter on my popcorn");

  let butter = await addbutter;
  console.log(`husband: i got some ${butter}`);
  console.log("husband:anything else");

  let drink = await coldDrink;
  console.log(`husband:get ${drink}`);

  return ticket;
};
moviez().then((msg) => console.log(`person3:show ${msg}`));
console.log("person4:show ticket");
console.log("person5:show ticket");
