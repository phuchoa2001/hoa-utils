function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
// const throttle = (fn, delay) => {
//   let lastCall = 0;
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       const now = Date.now();
//       if (now - lastCall < delay) {
//         reject(new Error('Throttled'));
//       } else {
//         lastCall = now;
//         fn(...args)
//           .then(resolve)
//           .catch(reject);
//       }
//     });
//   };
// };

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// const retry = (fn, retries) => {
//   return fn().catch(err => {
//     return (retries > 1 ? retry(fn, retries - 1) : Promise.reject(err));
//   });
// }

// const retryWithDelay = (fn, retries, delay) => {
//   return fn().catch(err => {
//     return (retries > 1
//       ? delay(delay).then(() => retryWithDelay(fn, retries - 1, delay))
//       : Promise.reject(err)
//     );
//   });
// }

module.exports = { debounce };