const makingTime = 3000;
const DeliveryTime = 2000;
const sellingTime = 1000;

function makeToys() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Not deffected");
      } else {
        reject("Deffected");
      }
    }, makingTime);
  });
}
function deliverToys() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Delievered");
      } else {
        reject("Not Delievered");
      }
    }, DeliveryTime);
  });
}
function sellToys(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "Delievered") {
        if (Math.random() > 0.7) {
          resolve("sold");
        } else {
          reject("not sold");
        }
      }
    }, sellingTime);
  });
}

// makeToys()
//   .then(() => deliverToys())
//   .then((status) => sellToys(status))
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));




  async function main() {
    try {
      const makeResult = await makeToys();
      console.log(makeResult);
  
      const deliverResult = await deliverToys();
      console.log(deliverResult);
  
      const sellResult = await sellToys(deliverResult);
      console.log(sellResult);
    } catch (err) {
      console.error(err);
    }
  }
  main()