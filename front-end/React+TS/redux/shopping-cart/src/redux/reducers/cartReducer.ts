const initState: any[] = []

const cartReducer = (state = initState, action: any) => {
    let { type, payload } = action
    switch (type) {
        case "ADD_CART":
            let checkDupilcate = state.find((item) => item.id === payload.id)
            if (checkDupilcate) {
                state = state.map((item) => {
                    return item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            } else {
                state = [...state, { ...payload, quantity: 1 }]
            }
            break;
        case "REMOVE_CART":
            state = state.filter(item => item.id !== payload)
            break;
        case "UP_QTY":
            state = state.map((item) => {
                return item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
            })
            break;
        case "DOWN_QTY":
            state = state.map(item => {
                if (item.id === payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            break;
        case "PAYMENT":
            state = []
            break;
    }

    return state
}

export default cartReducer