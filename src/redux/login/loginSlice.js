import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const saved = localStorage.getItem("loginState");
    return saved ? JSON.parse(saved) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("loginState", JSON.stringify(state));
  } catch {}
};

const initialState = loadState() || {
  name: "",
  password: "",
  isLoged: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
      saveState(state);
    },
    setPassword(state, action) {
      state.password = action.payload;
      saveState(state);
    },
    login(state) {
      state.isLoged = true;
      saveState(state);
    },
    logout(state) {
      state.name = "";
      state.password = "";
      state.isLoged = false;
      saveState(state);
    },
  },
});

export const { setName, setPassword, login, logout } = loginSlice.actions;
export default loginSlice.reducer;