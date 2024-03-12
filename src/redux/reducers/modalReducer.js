import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showModal: false,
  showLogin: false,
};
const authSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
  },
});

export const { setShowModal,setShowLogin } = authSlice.actions;

export default authSlice.reducer;
