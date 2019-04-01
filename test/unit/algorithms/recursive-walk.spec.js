const recursiveWalk = require('../../../src/algorithms/recursive-walk');

describe('recursive-walk', () => {
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

        recursiveWalk(data, consumer);

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
