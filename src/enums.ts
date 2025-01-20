export enum Status {
	ACTIVE = 'Active',
	DISABLED = 'Disabled',
	ALL = 'All statuses',
}

export enum Country {
	UA = 'Ukraine',
	US = 'United States',
	CA = 'Canada',
	DE = 'Germany',
	FR = 'France',
	AU = 'Australia',
	JP = 'Japan',
	CN = 'China',
	IN = 'India',
}

export enum Department {
	HR = 'Human Resources',
	FIN = 'Finance',
	IT = 'Information Technology',
	MKT = 'Marketing',
	SAL = 'Sales',
	CS = 'Customer Support',
	OPS = 'Operations',
	LEG = ' Legal',
	PM = 'Product Management',
}

export function enumToList<T extends Record<string, string | number>>(enumObj: T): { name: T[keyof T]; value: keyof T }[] {
	return Object.entries(enumObj).map(([key, value]) => ({
		name: value as T[keyof T],
		value: key as keyof T,
	}));
}
