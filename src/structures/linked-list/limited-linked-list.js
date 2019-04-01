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

    let count = 0;

    /**
     * @override
     */
    self.unshift = function (...items) {
        // write code here
    };

    /**
     * @override
     */
    self.unshiftAll = function (items) {
        // write code here
    };

    /**
     * @override
     */
    self.push = function (...items) {
        // write code here
    };

    /**
     * @override
     */
    self.pushAll = function (items) {
        // write code here
    };

    /**
     * @override
     */
    self.shift = function () {
        // write code here
    };

    /**
     * @override
     */
    self.pop = function () {
        // write code here
    };
}
