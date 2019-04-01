const { queueDeepCopy } = require('../../../src/algorithms/queue-deep-copy');

describe('queue-deep-copy', () => {
    let data;

    beforeEach(() => {
        data = {
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
    });

    it('copy in empty object',() => {
        let to = {},
            returns;

        returns = queueDeepCopy(to, data);

        expect(to).toEqual(data);
        expect(to).toBe(returns);
    });

    it('copy in object with data',() => {
        let to = {
                a: {
                    c: {
                        g: null
                    }
                },
                h: null
            },
            returns;

        returns = queueDeepCopy(to, data);

        expect(to).toEqual({
            a: {
                b: {
                    d: null
                },
                c: {
                    e: null,
                    f: null,
                    g: null
                }
            },
            h: null
        });
        expect(to).toBe(returns);
    });
});
