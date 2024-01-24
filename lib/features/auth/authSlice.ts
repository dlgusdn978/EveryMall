import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  refreshToken: string;
}

const initialState = {
  accessToken: "",
  refreshToken: "",
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    setInitState(state) {
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const { setAccessToken, setRefreshToken, setInitState } =
  authSlice.actions;
export default authSlice.reducer;
