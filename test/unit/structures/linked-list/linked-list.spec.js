const LinkedList = require('../../../../src/structures/linked-list/linked-list');

describe('linked-list', () => {
    const firstItem = 'first';
    const secondItem = 'second';
    const lastItem = 'last';
    const otherItem = 'other';
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
        linkedList.push(firstItem);
        linkedList.push(secondItem);
        linkedList.push(lastItem);
    });

    it('get', () => {
        expect(linkedList.get(0)).toBe(firstItem);
        expect(linkedList.get(2)).toBe(lastItem);
        expect(linkedList.get(1)).toBe(secondItem);
    });

    it('getFirst', () => {
        expect(linkedList.getFirst()).toBe(firstItem);

        linkedList.unshift(otherItem);

        expect(linkedList.getFirst()).toBe(otherItem);
    });

    it('getLast', () => {
        expect(linkedList.getLast()).toBe(lastItem);

        linkedList.push(otherItem);

        expect(linkedList.getLast()).toBe(otherItem);
    });

    it('unshift', () => {
        linkedList.unshift(otherItem);

        expect(linkedList.toArray()).toEqual([otherItem, firstItem, secondItem, lastItem]);

        linkedList.unshift(1, 2, 3, 4, 5);

        expect(linkedList.toArray()).toEqual([1, 2, 3, 4, 5, otherItem, firstItem, secondItem, lastItem]);
    });

    it('unshiftAll', () => {
        linkedList.unshiftAll([otherItem]);

        expect(linkedList.toArray()).toEqual([otherItem, firstItem, secondItem, lastItem]);

        linkedList.unshiftAll([1, 2, 3, 4, 5]);

        expect(linkedList.toArray()).toEqual([1, 2, 3, 4, 5, otherItem, firstItem, secondItem, lastItem]);
    });

    it('push', () => {
        linkedList.push(otherItem);

        expect(linkedList.toArray()).toEqual([firstItem, secondItem, lastItem, otherItem]);

        linkedList.push(1, 2, 3, 4, 5);

        expect(linkedList.toArray()).toEqual([firstItem, secondItem, lastItem, otherItem, 1, 2, 3, 4, 5]);
    });

    it('pushAll', () => {
        linkedList.pushAll([otherItem]);

        expect(linkedList.toArray()).toEqual([firstItem, secondItem, lastItem, otherItem]);

        linkedList.pushAll([1, 2, 3, 4, 5]);

        expect(linkedList.toArray()).toEqual([firstItem, secondItem, lastItem, otherItem, 1, 2, 3, 4, 5]);
    });

    it('shift', () => {
        expect(linkedList.shift()).toBe(firstItem);

        expect(linkedList.toArray()).toEqual([secondItem, lastItem]);
    });

    it('pop', () => {
        expect(linkedList.pop()).toBe(lastItem);

        expect(linkedList.toArray()).toEqual([firstItem, secondItem]);
    });

    it('forEach', () => {
        const consumer = jasmine.createSpy();

        linkedList.forEach(consumer);

        expect(consumer.calls.allArgs()).toEqual([
            [firstItem, 0, linkedList],
            [secondItem, 1, linkedList],
            [lastItem, 2, linkedList]
        ])
    });

    it('toArray', () => {
        expect(linkedList.toArray()).toEqual([firstItem, secondItem, lastItem])
    });
});
