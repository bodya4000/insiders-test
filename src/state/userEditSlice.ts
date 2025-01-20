import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country, Department, Status } from '../enums';

type UserInformationState = {
	currentName: string;
	name: string;
	department?: { name: string; value: Department };
	country?: { name: string; value: Country };
	status?: { name: string; value: Status };
};

const initialState: UserInformationState = {
	currentName: '',
	name: '',
	department: undefined,
	country: undefined,
	status: undefined,
};

const userSlice = createSlice({
	name: 'userInformation',
	initialState,
	reducers: {
		setName(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
		setDepartment(state, action: PayloadAction<{ name: string; value: Department }>) {
			state.department = action.payload;
		},
		setCountry(state, action: PayloadAction<{ name: string; value: Country }>) {
			state.country = action.payload;
		},
		setStatus(state, action: PayloadAction<{ name: string; value: Status }>) {
			state.status = action.payload;
		},
		resetUserInformation(state) {
			state.name = '';
			state.department = undefined;
			state.country = undefined;
			state.status = undefined;
		},

		setCurrentUser(state, action: PayloadAction<string>) {
			state.currentName = action.payload;
		},
	},
});

export const { setName, setDepartment, setCountry, setStatus, resetUserInformation, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
