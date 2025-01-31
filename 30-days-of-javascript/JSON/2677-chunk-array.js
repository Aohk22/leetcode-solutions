
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = new Array()

    for (let i = 0; i < arr.length; i = i + size) {
        let temp = new Array();
        temp = arr.slice(i, i + size);
        result.push(temp);
    }
    return result;
};
