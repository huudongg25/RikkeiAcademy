let initCount = 2;

 const numSlice = (state = initCount, action) => {
    console.log(state)
    switch (action.type) {
        case "UP":
            state = action.payload;
            break;
    }
    return state
}

export default numSlice