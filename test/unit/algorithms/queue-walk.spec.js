const { queueWalk } = require('../../../src/algorithms/queue-walk');

describe('queue-walk', () => {
    it('should call consumer with all nodes',() => {
        const consumer = jasmine.createSpy();
        const data = {
            a: {
                b: {
                    d: null
                },
                c: {
                    e: null,
                    f: null
                }
            }
        };

        queueWalk(data, consumer);

        expect(consumer.calls.allArgs()).toEqual([
            ['a', data.a],
            ['b', data.a.b],
            ['d', null],
            ['c', data.a.c],
            ['e', null],
            ['f', null],
        ]);
    });
});
