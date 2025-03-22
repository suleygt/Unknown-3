import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "Besiktas",
  name: "Beşiktaş JK",
  avatar: "https://images.seeklogo.com/logo-png/1/2/besiktas-jk-logo-png_seeklogo-18692.png",
  verified: true,
  locked: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
      state.verified = action.payload.verified;
      state.locked = action.payload.locked;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;