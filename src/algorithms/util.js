module.exports = {
    isNotNullObject,
    getEntryArray,
    getReverseEntryArray
};

function isNotNullObject(value) {
    return value !== null && typeof value === 'object';
}

function getEntryArray(object) {
    return Object.keys(object).map(key => {
        return {
            key: key,
            value: object[key]
        };
    });
}

function getReverseEntryArray(object) {
    return getEntryArray(object).reverse();
}
