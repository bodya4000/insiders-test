import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersData } from '../../public/data/data';
import { TUser, TUserEdit } from '../types';

interface UsersSlice {
	users: TUser[];
}

const initialState: UsersSlice = {
	users: usersData,
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
		deleteUser(state, action: PayloadAction<string>) {
			console.log(action.payload);
			console.log(state.users);
			state.users = state.users.filter(user => user.name != action.payload);
			console.log(state.users);
		},
	},
});

export const { editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
