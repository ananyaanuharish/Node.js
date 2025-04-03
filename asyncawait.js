const makeApiCall = (time) => {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This API executed in:" + time);
      }, time);
    });
};
const apiRequests = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];


(async function () {
  for (let request of apiRequests) {
    console.log(await request());
  }
})();


// chapter 9 -> Node.js-Build REST API CRUD Project


