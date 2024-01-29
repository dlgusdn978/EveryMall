import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  access_token: string;
  expiration_time: number;
}

const initialState = {
  access_token: "",
  expiration_time: new Date(Date.now()).getTime(),
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<AuthState>) {
      state.access_token = action.payload.access_token;
      state.expiration_time = action.payload.expiration_time;
    },
    setInitState(state) {
      state.access_token = "";
      state.expiration_time = new Date(Date.now()).getTime();
    },
  },
});

export const { setAccessToken, setInitState } = authSlice.actions;
export default authSlice.reducer;
