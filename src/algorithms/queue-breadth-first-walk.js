const { isNotNullObject, getEntryArray } = require('./util');
const LinkedList = require('../structures/linked-list/linked-list');


module.exports.queueBreadthFirstWalk = function (object, consumer) {
    let queue;
    let currentObject;

    queue = new LinkedList;
    queue.pushAll(getEntryArray(object));
    currentObject = queue.shift();

    while(currentObject !== undefined) {
        let {
            key,
            value
        } = currentObject;

        consumer(key, value);

        if (isNotNullObject(value)) {
            queue.pushAll(getEntryArray(value));
        }

        currentObject = queue.shift();
    }
};
