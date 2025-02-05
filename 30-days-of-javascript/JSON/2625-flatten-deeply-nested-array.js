/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    //const stack = [...arr.map(item => [item, depth])];
    const theStack = []
    // push every item in arr (can be another array) in to theStack
    arr.map(item => theStack.push([item, depth]))
    const result = []

    // loop until there are no items left
    while (theStack.length > 0) {
        // get item from stack
        const [item, depth] = theStack.pop()

        // if that item is an array, and depth is not 0
        // (depth = 0 means that we reached the required flatten depth)
        // then push every element of that array into theStack 
        // therefore we can come back to those element later and retrive it
        if (Array.isArray(item) && depth > 0) {
            stack.push(...item.map(subItem => [subItem, depth - 1]));
            // this is the same as doing
            // for (let i = 0; i < item.length; i++) {
            //      stack.push(item[i])
            // }
        } else {
            result.push(item)
        }
    }

    // the earliest item pushed will be at the start of the array, we don't want that
    return result.reverse()
};
