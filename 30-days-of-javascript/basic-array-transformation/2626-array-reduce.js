/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length == 0) return init; // extra code but runs faster
    result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};
