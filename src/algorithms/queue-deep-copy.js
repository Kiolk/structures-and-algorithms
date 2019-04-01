const { isNotNullObject, getReverseEntryArray } = require('./util');

module.exports.queueDeepCopy = function (to, from) {
    let queue = [];
    let currentObject = getReverseEntriesToCopyObject(to, from);

    while(currentObject !== undefined) {
        let { entries, to } = currentObject;

        entries.forEach(function (entry) {
            isNotNullObject(entry.value)
            isNotNullObject(to[entry.key])

            if (isNotNullObject(entry.value)) {
                if (!isNotNullObject(to[entry.key])) {
                    to[entry.key] = {};
                }

                queue.push(getReverseEntriesToCopyObject(to[entry.key], entry.value));
            } else {
                to[entry.key] = entry.value
            }
        });

        currentObject = queue.pop();
    }

    return to;
};


function getReverseEntriesToCopyObject(to, from) {
    return {
        entries: getReverseEntryArray(from),
        to: to
    };
}