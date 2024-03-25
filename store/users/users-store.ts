import { CartProduct, CartState, User, UsersState } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UsersState = {
  users: [
    {
      id: '333',
      userName: 'LMadrigalArellano',
      firstName: 'Leonardo',
      lastName: 'Madrigal',
      bio: 'Software Developer',
      email: 'LMadrigalArellano@Deloitte.com',
      password: '123',
      areasOfInterest: [
        'sport',
        'software',
        'technology',
      ],
      role: 'admin',
    }
  ]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    setInitialUsers(state, action: PayloadAction<UsersState>){
      state.users = action.payload.users;
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

      if( indexOfUser !== -1){
        return;
      }
      
      state.users[indexOfUser] = updatedUser;
    },

    validateLogin(state, action: PayloadAction<string, string>){
      const userInDb = state.users.find((user) => user.email === action.payload[0]);

      if(userInDb !== undefined){
        if(userInDb.password === action.payload[1]){
          
        }
      }
    }
  }
});

export const { 
  setInitialUsers, 
  addNewUser, 
  removeUser, 
  updateUser,
} = usersSlice.actions

export default usersSlice.reducer