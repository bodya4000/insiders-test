import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersData } from '../../public/data/data';
import { TUser, TUserEdit } from '../types';

interface UsersSlice {
	users: TUser[];
	popup: boolean;
}

const initialState: UsersSlice = {
	users: usersData,
	popup: false,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		editUser(state, action: PayloadAction<TUserEdit>) {
			const { currentUser, name, department, country, status } = action.payload;
			const user = state.users.find(user => user.name === currentUser);
			if (user) {
				Object.assign(user, {
					name: name ?? user.name,
					department: department ?? user.department,
					country: country ?? user.country,
					status: status ?? user.status,
				});
			} else {
				console.warn(`User with name "${currentUser}" not found.`);
			}
		},
		saveUser(state, action: PayloadAction<TUserEdit>) {
			const { name, department, country, status } = action.payload;
			console.log(action.payload);
			if (name && department && country && status) {
				state.users.push({
					name,
					department,
					country,
					status,
				});
			}
		},
		deleteUser(state, action: PayloadAction<string>) {
			state.users = state.users.filter(user => user.name != action.payload);
		},
		togglePopPup(state) {
			state.popup = !state.popup;
		},
	},
});

export const { editUser, deleteUser, saveUser, togglePopPup } = usersSlice.actions;

export default usersSlice.reducer;
