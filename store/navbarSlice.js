import { createSlice } from "@reduxjs/toolkit";


const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        mobileMenuIsShown: false
    },
    reducers: {
        toggleMenu(state) {
            state.mobileMenuIsShown = !state.mobileMenuIsShown
        }
    }
})

export const navbarActions = navbarSlice.actions;

export default navbarSlice;