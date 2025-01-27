var createCounter = function(init) {
    const base = init;
    var curr = init;
    return { 
        increment() {
            return ++curr;
        },

        decrement() {
            return --curr;
        },
        
        reset() {
            curr = base;
            return curr;
        },
    }

};
