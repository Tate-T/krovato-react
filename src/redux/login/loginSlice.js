import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

let userData = {}
let baseUrl = "https://connections-api.goit.global"

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

// let response;

const initialState = loadState() || {
  name: "",
  password: "",
  isLogged: false,
  token: null,
  isTokenUpdated: false,
};

function signUpApi(userData){
  let signUp = `${baseUrl}/users/signup`;
  // let userData = {}
  createAsyncThunk("users/signup", async (userData, signUp) => {
    // await signUp.post(userData)
    let response = await axios.post(signUp, userData);
    console.log(response);
    // return response.data
  },)
}

function loginApi(userData){

}

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
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(signUpApi.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(action.payload);
        // state.token.push(action.payload)
      })
    },
  },
});

export const { setName, setPassword, login, logout } = loginSlice.actions;
export default loginSlice.reducer;