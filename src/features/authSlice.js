import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      const user = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
      // state.isAuthenticated = true;
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.username === username && storedUser.password === password) {
        state.user = storedUser;
        state.isAuthenticated = true;
        console.log( state.isAuthenticated)
      } else {
        alert('Invalid credentials');
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;
