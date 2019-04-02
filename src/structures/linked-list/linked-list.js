module.exports = LinkedList;

/**
 * Constructor of LinkedList
 * @constructor
 */
function LinkedList() {
    const self = this;

    /**
     * First node of LinkedList
     * @type {null | Node}
     * @private
     */
    self._first = null;
    /**
     * Last node of LinkedList
     * @type {null | Node}
     * @private
     */
    self._last = null;

    /**
     * Return item by index
     * @param index - item position in LinkedList
     * @returns {*} - item
     */
    self.get = function (index) {
        let current = self._first;

        if (index < 0) {
            throw 'not support attribute index < 0';
        }

        while (index > 0){
            if (current === null) {
                break;
            }

            current = current.next;
            index--;
        }

        if (current) {
            return current.value;
        }
    };

    /**
     * Return first item
     * @returns {*} - item
     */
    self.getFirst = function () {
        if (self._first) {
            return self._first.value;
        }
    };

    /**
     * Return last item
     * @returns {*} - item
     */
    self.getLast = function () {
        if (self._last) {
            return self._last.value;
        }
    };

    /**
     * Add item to the start of LinkedList
     * @param items {...*}
     */
    self.unshift = function (...items) {
        for (let index = items.length - 1; index >= 0; index--) {
            let item = items[index];

            const node = new Node(item, null, self._first);

            if (!self._last) {
                self._last = node;
            } else {
                self._first.prev = node;
            }

            self._first = node;
        }
    };

    /**
     * Add all items to the start of LinkedList
     * @param items
     */
    self.unshiftAll = function (items) {
        self.unshift.apply(self, items);
    };

    /**
     * Add item to the end of LinkedList
     * @param item {...*}
     */
    self.push = function (...items) {
        for (let item of items) {
            const node = new Node(item, self._last, null);

            if (!self._first) {
                self._first = node;
            } else {
                self._last.next = node;
            }

            self._last = node;
        }
    };

    self.pushAll = function (items) {
        self.push.apply(self, items);
    };

    /**
     * Return and remove first item
     * @returns {*} first item
     */
    self.shift = function () {
        let node = self._first;

        if (!node) {
            return;
        }
        if (self._last === self._first) {
            self._last = null;
            self._first = null;
        } else {
            self._first = node.next;
            self._first.prev = null;
        }

        return node.value;
    };

    /**
     * Return and remove last item
     * @returns {*} last item
     */
    self.pop = function () {
        let node = self._last;

        if (!node) {
            return;
        }
        if (self._last === self._first) {
            self._last = null;
            self._first = null;
        } else {
            self._last = node.prev;
            self._last.next = null;
        }

        return node.value;
    };

    /**
     * Calling consumer function with all items
     * @param consumer {consumer}
     * @param thisArg? {*} value to use as 'this' when executing 'consumer'
     */
    self.forEach = function (consumer, thisArg) {
        let current = self._first;
        let index = -1;

        while (current) {
            index++;

            consumer.call(thisArg, current.value, index, self);
            current = current.next;
        }
    };

    /**
     * @callback consumer
     * @param {*} item
     * @param {number} index of iteration
     * @param {LinkedList} list
     */

    /**
     * Tests whether at least one element in the LinkedList passes the test implemented by the provided predicate
     * function.
     * @param predicate {predicate}
     * @param thisArg? {*} value to use as 'this' when executing 'predicate'
     * @returns {boolean}
     */
    self.some = function (predicate, thisArg) {
        let result = false;
        let current = self._first;
        let index = -1;

        while (!result && current) {
            index++;

            result = predicate.call(thisArg, current.value, index, self);
            current = current.next;
        }

        return result;
    };

    /**
     * @callback predicate
     * @param {*} item
     * @param {number} index of iteration
     * @param {LinkedList} list
     * @returns {boolean}
     */

    /**
     * Return equal array
     * @returns {Array}
     */
    self.toArray = function () {
        const result = [];

        self.forEach(item => result.push(item));

        return result;
    };
}

function Node(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}
module.exports.Node = Node;