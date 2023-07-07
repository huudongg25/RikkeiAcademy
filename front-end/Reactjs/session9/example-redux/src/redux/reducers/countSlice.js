
let initState = 1;

const countSlice = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case "UP":
            state += 1;
            break;
        case "DOWN":
            state -= 1;
            break
    }
    return state
}

export default countSlice


