/* This is the new and modern class syntax */
class TimeLimitedCache {
    cache = new Map()


    set(key, value, duration) {
        const alreadyExist = this.cache.get(key);

        if (alreadyExist) {
            // clear the timeout
            clearTimeout(alreadyExist.timeoutId);
        }

        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, {
            'value': value,
            'timeoutId': timeoutId,
        });
        return Boolean(alreadyExist);
    }


    get(key) {
        if (this.cache.get(key)) {
            return this.cache.get(key).value;
        }

        return -1;
    }


    count() {
        return this.cache.size;
    }
}



/* The old ways to do this */
var TimeLimitedCache = function() {
    this.cache = new Map();
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyExist = this.cache.get(key);

    if (alreadyExist) {
        // clear the timeout
        clearTimeout(alreadyExist.clearTimeout);
    }


    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
        'value': value,
        'timeoutId': timeoutId,
    });
    return Boolean(alreadyExist);
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size; 
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
