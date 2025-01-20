import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userEditReducer from './userEditSlice';
import userReducer from './userSlice';

export const store = configureStore({
	reducer: {
		users: userReducer,
		userEdit: userEditReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useUsersSelector = () => useSelector((state: RootState) => state.users);
export const useUserEditSelector = () => useSelector((state: RootState) => state.userEdit);
