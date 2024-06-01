import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialstate ={
  currentUser: null,
  loading : false,
  error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
      value: 0
    },
    reducers: {
      loginStart:(state)=>{
        state.loading=true;
      },
      loginSuccess:(state,action)=>{
        state.loading=false;
        state.currentUser=action.payload;
      },
      loginFailure :(state)=>{
        state.loading=false;
        state.error=true;
      }, 
      logout: (state)=>{
        state.currentUser=null;
        state.loading =false;
        state.error=false;
      }
    }
  })
  export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions  
  export default userSlice.reducer;