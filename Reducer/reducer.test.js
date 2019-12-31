const reducer = require('./reducer');
const { INCREMENT, DECREMENT } = require('../Actions');

describe('reducer', () => {
	it('increments default of 0 to 1', () => {
		expect(reducer(null, INCREMENT())).toBe(1)
	})

	it('increments 1 to 2', () => {
		expect(reducer(1, INCREMENT())).toBe(2);
	})

	it ('decrements 0 to -1', () => {
		expect(reducer(0, DECREMENT())).toBe(-1);
	})
})