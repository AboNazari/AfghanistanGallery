import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    title: "",
    date: "",
    category: "",
    producer: "",
    location: "",
    description: "",
    shortDesc: "",
    img: "",
    type: "",
    video: "",
    file: "",
}

export const editDataSlice = createSlice({
    name: 'editData',
    initialState,
    reducers: {
        editData: (state, action) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.date = action.payload.date;
            state.category = action.payload.category;
            state.producer = action.payload.producer;
            state.location = action.payload.location;
            state.description = action.payload.description;
            state.shortDesc = action.payload.shortDesc;
            state.img = action.payload.img;
            state.type = action.payload.type;
            state.video = action.payload.video;
            state.file = action.payload.file;
        }
    }
})

export default editDataSlice.reducer;
export const { editData } = editDataSlice.actions;