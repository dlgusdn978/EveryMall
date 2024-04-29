import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user_id: string;
}

const initialState = {
  user_id: "",
} as UserState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInitState(state) {
      state.user_id = "";
    },
    setUserInfo(state, action: PayloadAction<UserState>) {
      state.user_id = action.payload.user_id;
    },
  },
});

export const { setUserInitState, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
