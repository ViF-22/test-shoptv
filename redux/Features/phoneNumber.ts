import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

export const phoneNumberSlice = createSlice({
  name: "phoneNumber",
  initialState,
  reducers: {
    changePhoneNumber: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const { changePhoneNumber } = phoneNumberSlice.actions;
export default phoneNumberSlice.reducer;
