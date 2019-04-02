const LimitedLinkedList = require('../../../../src/structures/linked-list/limited-linked-list');

describe('limited-linked-list', () => {
    let limitedLinkedList;

    beforeEach(() => {
        limitedLinkedList = new LimitedLinkedList(3);
    });

    it('unshift', () => {
        limitedLinkedList.unshift(1, 2, 3);
        expect(limitedLinkedList.toArray()).toEqual([1, 2, 3]);

        limitedLinkedList.unshift(4, 5);
        expect(limitedLinkedList.toArray()).toEqual([4, 5, 1]);

        limitedLinkedList.unshift(6, 7, 8);
        expect(limitedLinkedList.toArray()).toEqual([6, 7, 8]);

        limitedLinkedList.unshift(9);
        expect(limitedLinkedList.toArray()).toEqual([9, 6, 7]);
    });

    it('unshiftAll', () => {
        limitedLinkedList.unshiftAll([1, 2, 3]);
        expect(limitedLinkedList.toArray()).toEqual([1, 2, 3]);

        limitedLinkedList.unshiftAll([4, 5]);
        expect(limitedLinkedList.toArray()).toEqual([4, 5, 1]);

        limitedLinkedList.unshiftAll([6, 7, 8]);
        expect(limitedLinkedList.toArray()).toEqual([6, 7, 8]);

        limitedLinkedList.unshiftAll([9]);
        expect(limitedLinkedList.toArray()).toEqual([9, 6, 7]);
    });

    it('push', () => {
        limitedLinkedList.push(1, 2, 3);
        expect(limitedLinkedList.toArray()).toEqual([1, 2, 3]);

        limitedLinkedList.push(4, 5);
        expect(limitedLinkedList.toArray()).toEqual([3, 4, 5]);

        limitedLinkedList.push(6, 7, 8);
        expect(limitedLinkedList.toArray()).toEqual([6, 7, 8]);

        limitedLinkedList.push(9);
        expect(limitedLinkedList.toArray()).toEqual([7, 8, 9]);
    });

    it('pushAll', () => {
        limitedLinkedList.pushAll([1, 2, 3]);
        expect(limitedLinkedList.toArray()).toEqual([1, 2, 3]);

        limitedLinkedList.pushAll([4, 5]);
        expect(limitedLinkedList.toArray()).toEqual([3, 4, 5]);

        limitedLinkedList.pushAll([6, 7, 8]);
        expect(limitedLinkedList.toArray()).toEqual([6, 7, 8]);

        limitedLinkedList.pushAll([9]);
        expect(limitedLinkedList.toArray()).toEqual([7, 8, 9]);
    });

    it('shift', () => {
        limitedLinkedList.pushAll([1, 2, 3]);
        expect(limitedLinkedList.toArray()).toEqual([1, 2, 3]);

        expect(limitedLinkedList.shift()).toBe(1);
        expect(limitedLinkedList.toArray()).toEqual([2, 3]);

        expect(limitedLinkedList.shift()).toBe(2);
        expect(limitedLinkedList.toArray()).toEqual([3]);

        expect(limitedLinkedList.shift()).toBe(3);
        expect(limitedLinkedList.toArray()).toEqual([]);

        limitedLinkedList.pushAll([4, 5, 6]);
        expect(limitedLinkedList.toArray()).toEqual([4, 5, 6]);
    });

    it('pop', () => {
        limitedLinkedList.pushAll([1, 2, 3]);
        expect(limitedLinkedList.toArray()).toEqual([1, 2, 3]);

        expect(limitedLinkedList.pop()).toBe(3);
        expect(limitedLinkedList.toArray()).toEqual([1, 2]);

        expect(limitedLinkedList.pop()).toBe(2);
        expect(limitedLinkedList.toArray()).toEqual([1]);

        expect(limitedLinkedList.pop()).toBe(1);
        expect(limitedLinkedList.toArray()).toEqual([]);

        limitedLinkedList.pushAll([4, 5, 6]);
        expect(limitedLinkedList.toArray()).toEqual([4, 5, 6]);
    });
});
