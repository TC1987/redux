const createStore = (reducer) => {
	let state;
	let listeners = [];

	let dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
		return action;
	}

	let getState = () => {
		return state;
	}

	let subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		}
	}

	dispatch({}); // Required to initialize default state.

	return {
		dispatch,
		getState,
		subscribe
	}
}

module.exports = createStore;