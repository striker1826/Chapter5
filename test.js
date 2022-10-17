// // 콜백함수
// timer(1000, function () {
//   console.log("작업1");
//   timer(1000, function () {
//     console.log("작업2");
//     timer(1000, function () {
//       console.log("작업3");
//     });
//   });
// });

// // promise then
// const timer = timer(1000)
//   .then(function () {
//     console.log("작업1");
//     return timer(1000);
//   })
//   .then(function () {
//     console.log("작업2");
//     return timer(1000);
//   })
//   .then(function () {
//     console.log("작업3");
//   });

// //   async await
// timer(1000);

// console.log("작업1");
// timer(1000);

// console.log("작업2");
// timer(1000);

// console.log("작업3");

async function run() {
  let time = timer(1000);
  console.log("작업1");
  timer(1000);
  console.log("작업2");
  timer(1000);
  console.log("작업3");
}

async function run2() {
  await console.log(run);
}
