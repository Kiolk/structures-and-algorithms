const { queueBreadthFirstWalk } = require('../../../src/algorithms/queue-breadth-first-walk');

describe('queue-breadth-first-walk', () => {
    it('should call consumer with all nodes',() => {
        const consumer = jasmine.createSpy();
        const data = {
            a: {
                b: {
                    d: null,
                    g: {
                        h: null,
                        i: null
                    }
                },
                c: {
                    e: null,
                    f: null
                }
            }
        };

        queueBreadthFirstWalk(data, consumer);

        expect(consumer.calls.allArgs()).toEqual([
            ['a', data.a],
            ['b', data.a.b],
            ['c', data.a.c],
            ['d', null],
            ['g', data.a.b.g],
            ['e', null],
            ['f', null],
            ['h', null],
            ['i', null]
        ]);
    });
});
