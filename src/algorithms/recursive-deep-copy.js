const { isNotNullObject } = require('./util');

module.exports = function recursiveDeepCopy(to, from) {
    for (let key in from) {
        let value;

        if (!from.hasOwnProperty(key)) {
            break
        }

        value = from[key];

        if (isNotNullObject(value)) {
            if (!isNotNullObject(to[key])) {
                to[key] = {};
            }
            recursiveDeepCopy(to[key], value);
        } else {
            to[key] = value;
        }
    }

    return to;
};
