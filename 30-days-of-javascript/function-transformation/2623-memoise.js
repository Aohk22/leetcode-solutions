/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = new Map();
    return function(...args) {
        arguments = JSON.stringify(args);
        if (cache.has(arguments)) {
            return cache.get(arguments);
        } else {
            cache.set(arguments, fn(...args));
            return cache.get(arguments);
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// failed on input 67
