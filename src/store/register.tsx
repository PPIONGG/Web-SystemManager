import { createSlice } from "@reduxjs/toolkit";
import { register } from "../types/Storetype";

const initialState: register = {
  apiGetTaskCutting: null,
  barCodePoodetail : []
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setReqApiGetTaskCutting: (state, action) => {
      state.apiGetTaskCutting = action.payload;
    },
    setBarCodePoodetail : (state,action) => {
        state.barCodePoodetail = action.payload;
    }
  },
});

export const { setReqApiGetTaskCutting,setBarCodePoodetail } = registerSlice.actions;
export default registerSlice.reducer;
