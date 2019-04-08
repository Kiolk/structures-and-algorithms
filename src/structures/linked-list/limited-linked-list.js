const LinkedList = require('./linked-list');

module.exports = LimitedLinkedList;

/**
 * Constructor of LimitedLinkedList
 * @constructor
 * @augments LinkedList
 */
function LimitedLinkedList(limit) {
    LinkedList.call(this);

    const self = this;
    const parent = { ...this };

    self.count = 0;
    self.limit = limit;

    /**
     * @override
     */
    self.unshift = function (...items) {
        let unshiftedItems = items;
        if (items.length > self.limit) {
            unshiftedItems = items.slice(0, self.limit);
        }
        for (let index = unshiftedItems.length - 1; index >= 0; --index) {
            parent.unshift(unshiftedItems[index]);
            if (self.limit == self.count) {
                parent.pop();
            } else {
                ++self.count;
            }
        }
    };

    /**
     * @override
     */
    self.unshiftAll = function (items) {
        self.unshift.apply(self, items);
    };

    /**
     * @override
     */
    self.push = function (...items) {
        let pushedItems = items;
        if (items.length > self.limit) {
            pushedItems = items.slice(items.length - self.limit)
        }

        for (let index = 0; index < pushedItems.length; ++index) {
            parent.push(pushedItems[index]);
            if (self.count == self.limit) {
                parent.shift();
            } else {
                ++self.count
            }
        }
    };

    /**
     * @override
     */
    self.pushAll = function (items) {
        self.push.apply(self, items);
    };

    /**
     * @override
     */
    self.shift = function () {
        let node = parent.shift();
        --self.count;

        return node;
    };

    /**
     * @override
     */
    self.pop = function () {
        let node = parent.pop();
        --self.count;

        return node;
    };
}
