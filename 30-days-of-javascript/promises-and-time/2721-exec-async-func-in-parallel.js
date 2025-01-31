/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

// array of async functions
// ret new Promise
// each func to arguments and return Promise, all Promise in parallel
// if Promise resolve -> return array of all Promise values 
// if even 1 reject -> return Promise reject with reason of first rejection
// *do not use Promise.all function

var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array();
        let n_res = 0;

        // edge case where functions is null
        if (functions.length == 0) resolve([]);
        
        // iterate over all async functions
        functions.forEach((func, index) => {
            func()
            // get function resolution, assign to array, if n_res = size_functions then resolve array
                .then((val) => {
                    results[index] = val;
                    n_res++;
                    if (n_res == functions.length) resolve(results)
                })
                .catch(err => reject(err))
        });
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
