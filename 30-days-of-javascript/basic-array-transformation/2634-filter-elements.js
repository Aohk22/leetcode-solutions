/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    arr.forEach((item, index) => {
        fn(item, index) ? result.push(item) : null;
    })
    return result;
};
