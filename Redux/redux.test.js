const reducer = require('../Reducer/reducer');
const createStore = require('./redux');
const { INCREMENT, DECREMENT } = require('../Actions');

describe('redux', () => {
	let store;
	
	beforeEach(() => {
		store = createStore(reducer);
	})

	it('should return action after dispatch', () => {
		const incrementAction = INCREMENT();
		expect(store.dispatch(incrementAction)).toEqual(incrementAction);
	})

	it('increments default state by 1', () => {
		store.dispatch(INCREMENT());
		expect(store.getState()).toBe(1);
	})

	it('decrements default state by 1', () => {
		store.dispatch(DECREMENT());
		expect(store.getState()).toBe(-1);
	})
})