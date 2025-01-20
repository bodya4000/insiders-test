import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userFormReducer from './userFormSlice';
import userReducer from './userSlice';

export const store = configureStore({
	reducer: {
		users: userReducer,
		userForm: userFormReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useUsersSelector = () => useSelector((state: RootState) => state.users);
export const useUserFormSelector = () => useSelector((state: RootState) => state.userForm);
