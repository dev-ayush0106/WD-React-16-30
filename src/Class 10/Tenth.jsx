import React, { useReducer } from 'react'

function countReducer(state, action) {
    console.log(state);
    switch (action.type) {
        case "increase":
            return { ...state, count: state.count + 1 }
        case "decrease":
            return { ...state, count: state.count - 1 }
        case "reset":
            return { ...state, count: 0 }
        case "inc10":
            return { ...state, count1: state.count1 + 10 }
        case "dec10":
            return { ...state, count1: state.count1 - 10 }
        case "reset2":
            return { ...state, count1: 15 }
        case "inc50":
            return { ...state, count2: state.count2 + 50 }
        case "dec50":
            return { ...state, count2: state.count2 - 50 }
        case "reset3":
            return { ...state, count2: 50 }
    }
}
const Tenth = () => {
    let initalState = {
        count: 0,
        count1: 15,
        count2: 50
    }
    let [count, dispatch] = useReducer(countReducer, initalState)
    console.log(count)

    return (
        <div>
            {/* useReducer Hook : it use for state management
            let [currentState,dispatch]=useReducer(reducer,intialState)
      */}

            <h1>{count.count}</h1>
            <button onClick={() => { dispatch({ type: "increase" }) }}>+</button>
            <button onClick={() => { dispatch({ type: "decrease" }) }}>-</button>
            <button onClick={() => { dispatch({ type: "reset" }) }}>Reset</button>
            <hr />
            <h1>{count.count1}</h1>
            <button onClick={() => { dispatch({ type: "inc10" }) }}>+10</button>
            <button onClick={() => { dispatch({ type: "dec10" }) }}>-10</button>
            <button onClick={() => { dispatch({ type: "reset2" }) }}>Reset</button>
            <hr />
            <h1>{count.count2}</h1>
            <button onClick={() => { dispatch({ type: "inc50" }) }}>+50</button>
            <button onClick={() => { dispatch({ type: "dec50" }) }}>-50</button>
            <button onClick={() => { dispatch({ type: "reset3" }) }}>Reset</button>
        </div>
    )
}

export default Tenth
