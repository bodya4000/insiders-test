import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersData } from '../../public/data/data';
import { Country, Department, enumToList, Status } from '../enums';
import { TUser, TUserEdit } from '../types';

interface UsersSlice {
	status: Status | undefined;
	departments: Department[];
	country: Country | undefined;
	users: TUser[];
	popup: boolean;
}

const initialState: UsersSlice = {
	status: undefined,
	departments: [],
	country: undefined,
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
			if (name) {
				state.users.push({
					name,
					department: department || enumToList(Department)[0],
					country: country || enumToList(Country)[0],
					status: status || enumToList(Status)[0],
				});
			}
		},
		deleteUser(state, action: PayloadAction<string>) {
			state.users = state.users.filter(user => user.name != action.payload);
		},
		togglePopPup(state) {
			state.popup = !state.popup;
		},

		addDepartment(state, action: PayloadAction<Department>) {
			state.departments?.push(action.payload);
		},
		removeDepartment(state, action: PayloadAction<Department>) {
			return {
				...state,
				departments: state.departments?.filter(dep => dep !== action.payload),
			};
		},

		setCountry(state, action: PayloadAction<Country>) {
			state.country = action.payload;
		},

		setStatus(state, action: PayloadAction<Status>) {
			if (state.status == action.payload) {
				state.status = undefined;
			} else {
				state.status = action.payload;
			}
		},

		resetFiltering(state) {
			state.status = undefined;
			state.departments = [];
			state.country = undefined;
		},
	},
});

export const { editUser, deleteUser, saveUser, togglePopPup, addDepartment, removeDepartment, setCountry, setStatus, resetFiltering } = usersSlice.actions;

export default usersSlice.reducer;
