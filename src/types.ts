export type TUser = {
	name: string;
	status: TStatus;
	department: TDepartment;
	country: TCountry;
};

export type TUserEdit = {
	currentUser:string;
	name?: string;
	status?: TStatus;
	department?: TDepartment;
	country?: TCountry;
};

export type TStatus = {
	name: string;
	value: string;
};

export type TDepartment = {
	name: string;
	value: string;
};
export type TCountry = {
	name: string;
	value: string;
};
