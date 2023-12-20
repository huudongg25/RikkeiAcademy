import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

        console.log(result);
        return result.data
    }
)


export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 1 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchData.fulfilled, (state, action) => {
            // Add user to the state array
            state = action.payload
            return state
        })
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer