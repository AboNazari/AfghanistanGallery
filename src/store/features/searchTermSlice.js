import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    searchTerm: '',
    date: '',
    producer: '',
}


export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState,
    reducers: {
        updateTerm: (state, action) => {
            state.searchTerm = action.payload.searchTerm;
            state.date = action.payload.date;
            state.producer = action.payload.producer;
        }
    }
})

// Action creators are generated for each case reducer function
export const { updateTerm } = searchTermSlice.actions

export default searchTermSlice.reducer