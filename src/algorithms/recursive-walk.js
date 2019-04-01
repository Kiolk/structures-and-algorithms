module.exports = function recursiveWalk(object, consumer) {
    for (let key in object) {
        let value = object[key];

        consumer(key, value);
        if (typeof value === 'object') {
            recursiveWalk(value, consumer);
        }
    }
};