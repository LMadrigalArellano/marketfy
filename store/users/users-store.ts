import { User, UsersState } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UsersState = {
  users: [
    {
      id: '333',
      firstName: 'Leonardo',
      lastName: 'Madrigal',
      bio: 'Software Developer',
      email: 'leo@leo.com',
      password: '123',
      areasOfInterest: 'sport,software,animal',
      role: 'admin',
    }
  ],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    setInitialUsers(state, action: PayloadAction<UsersState>){
      if(action.payload.users.length > 0){
        state.users = action.payload.users;
      }
      if(action.payload.loggedUser !== undefined){
        state.loggedUser = action.payload.loggedUser;
      }
    },

    addNewUser(state, action: PayloadAction<User>){
      const newUser = action.payload;
      state.users.push(newUser);
    },

    removeUser(state, action: PayloadAction<User>) {
      state.users = state.users.filter((user) => user.id !== action.payload.id );
    },

    updateUser(state, action: PayloadAction<User>) {
      const updatedUser = action.payload;
      const indexOfUser = state.users.map(x => x.id).indexOf(updatedUser.id);
      
      if( indexOfUser === -1){
        return;
      }
      
      state.users[indexOfUser] = updatedUser;
    },

    setLoggedUser(state, action: PayloadAction<User>){
      state.loggedUser = action.payload;
    },

    logout(state){
      state.loggedUser = undefined;
    }
  }
});

export const { 
  setInitialUsers, 
  addNewUser, 
  removeUser, 
  updateUser,
  setLoggedUser,
  logout
} = usersSlice.actions

export default usersSlice.reducer