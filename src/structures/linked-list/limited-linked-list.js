const LinkedList = require('./linked-list');
const Node = require('./linked-list').Node

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
        for (var index = items.length - 1; index >= 0; --index) {
            const item = items[index];

            let node = new Node(item, null, self._first)

            if (!self._first) {
                self._last = node;
            } else {
                self._first.prev = node;
            }

            self._first = node;
            
            ++self.count;

            if (self.count > self.limit) {
                self._last = self._last.prev;
                if (!self._last) {
                    self_first = null;
                } else {
                    self._last.next = null
                }
                --self.count;
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
        for (var index = 0; index < items.length; ++index) {
            let item = items[index];

            let node = new Node(item, self._last, null);

            if (!self._last) {
                self._first = node;
            } else {
                self._last.next = node;
            }

            self._last = node;

            ++self.count;

            if (self.count > self.limit) {
                self._first = self._first.next;
                if (self._first) {
                    self._first.prev = null;
                } else {
                    self._last = null;
                }
                --self.count;
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
        let node = self._first;

        if (!self._first) {
            return node;
        }

        if (self._first == self._last) {
            self._first = null;
            self._last = null;
        } else {
            self._first = self._first.next;
            self._first.prev = null;
        }

        --self.count;

        return node.value;
    };

    /**
     * @override
     */
    self.pop = function () {
        let node = self._last;

        if (!self._last) {
            return node;
        }

        if (self._first == self._last) {
            self._first = null;
            self._last = null;
        } else {
            self._last = self._last.prev;
            self._last.next = null;
        }

        --self.count;
        
        return node.value;
    };
}
