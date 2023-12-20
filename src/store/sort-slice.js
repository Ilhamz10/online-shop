import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: ''
}

const sortSlicer = createSlice({
    initialState,
    name: 'sort',
    reducers: {
        setSort(state, action){
            state.sort = action.payload
        }
    }
})

export const sortActions = sortSlicer.actions

export default sortSlicer