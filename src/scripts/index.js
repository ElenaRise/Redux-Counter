const counterValue = document.getElementById('counter');
const counterIncrementBtnNode = document.getElementById('counter-increment-btn');
const counterDecrementBtnNode = document.getElementById('counter-decrement-btn')

function createCounterIncrementAction() {
    return {
        type: 'INCREMENT',
    };
}

function createCounterDecrementAction() {
    return {
        type: 'DECREMENT',
    };
}

const store = window.Redux.createStore(counterReducer);
window.store = store;

store.subscribe(() => {
    const state = store.getState();
    console.log('subscribe', state);
    counterValue.innerText = state;
});

counterIncrementBtnNode.addEventListener('click', () => {
    store.dispatch(createCounterIncrementAction())
} );

counterDecrementBtnNode.addEventListener('click', () => {
    store.dispatch(createCounterDecrementAction())
} );

function counterReducer(state = 0, action) {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }

    if (action.type === 'DECREMENT') {
        return state - 1;
    }

    return state;
}
