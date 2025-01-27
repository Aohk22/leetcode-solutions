/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const promises = await Promise.all([promise1, promise2]);
    const callback_function = (acc, curr) => acc + curr; // this is a call back function
    const result = promises.reduce(callback_function, 0);
    return result
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
