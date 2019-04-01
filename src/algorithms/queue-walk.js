const { isNotNullObject, getReverseEntryArray } = require('./util');

module.exports.queueWalk = function (object, consumer) {
    let queue = getReverseEntryArray(object);
    let currentObject = queue.pop();

    while(currentObject !== undefined) {
        let {
            key,
            value
        } = currentObject;

        consumer(key, value);

        if (isNotNullObject(value)) {
            queue = queue.concat(getReverseEntryArray(value));
        }

        currentObject = queue.pop();
    }
};
