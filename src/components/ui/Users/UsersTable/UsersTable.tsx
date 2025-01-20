import { FC } from 'react';
import { TUser } from '../../../../types';
import UserRow from './UserRow/UserRow';
import styles from './UsersTable.module.scss';

const UsersTable: FC = () => {
	const users: TUser[] = [
		{
			name: 'John Doe',
			status: {
				name: 'Active',
				value: 'ACTIVE',
			},
			department: {
				name: 'Information Technology',
				value: 'IT',
			},
			country: {
				name: 'United States',
				value: 'US',
			},
		},
		{
			name: 'Jane Smith',
			status: {
				name: 'Disabled',
				value: 'DISABLED',
			},
			department: {
				name: 'Finance',
				value: 'FIN',
			},
			country: {
				name: 'Canada',
				value: 'CA',
			},
		},
		{
			name: 'Alice Johnson',
			status: {
				name: 'Active',
				value: 'ACTIVE',
			},
			department: {
				name: 'Marketing',
				value: 'MKT',
			},
			country: {
				name: 'United Kingdom',
				value: 'GB',
			},
		},
		{
			name: 'Bob Brown',
			status: {
				name: 'All statuses',
				value: 'ALL',
			},
			department: {
				name: 'Sales',
				value: 'SAL',
			},
			country: {
				name: 'Australia',
				value: 'AU',
			},
		},
		{
			name: 'Charlie Davis',
			status: {
				name: 'Active',
				value: 'ACTIVE',
			},
			department: {
				name: 'Customer Support',
				value: 'CS',
			},
			country: {
				name: 'Germany',
				value: 'DE',
			},
		},
		{
			name: 'Eve Wilson',
			status: {
				name: 'Disabled',
				value: 'DISABLED',
			},
			department: {
				name: 'Human Resources',
				value: 'HR',
			},
			country: {
				name: 'France',
				value: 'FR',
			},
		},
		{
			name: 'Frank Moore',
			status: {
				name: 'Active',
				value: 'ACTIVE',
			},
			department: {
				name: 'Operations',
				value: 'OPS',
			},
			country: {
				name: 'India',
				value: 'IN',
			},
		},
		{
			name: 'Grace Lee',
			status: {
				name: 'All statuses',
				value: 'ALL',
			},
			department: {
				name: 'Legal',
				value: 'LEG',
			},
			country: {
				name: 'China',
				value: 'CN',
			},
		},
		{
			name: 'Henry White',
			status: {
				name: 'Active',
				value: 'ACTIVE',
			},
			department: {
				name: 'Product Management',
				value: 'PM',
			},
			country: {
				name: 'Japan',
				value: 'JP',
			},
		},
		{
			name: 'Isabella Green',
			status: {
				name: 'Disabled',
				value: 'DISABLED',
			},
			department: {
				name: 'Research and Development',
				value: 'R&D',
			},
			country: {
				name: 'Ukraine',
				value: 'UA',
			},
		},
		{
			name: 'Jack Black',
			status: {
				name: 'Active',
				value: 'ACTIVE',
			},
			department: {
				name: 'Sales',
				value: 'SAL',
			},
			country: {
				name: 'Australia',
				value: 'AU',
			},
		},
		{
			name: 'Lily Scott',
			status: {
				name: 'All statuses',
				value: 'ALL',
			},
			department: {
				name: 'Information Technology',
				value: 'IT',
			},
			country: {
				name: 'Canada',
				value: 'CA',
			},
		},
	];

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th scope='col'>Full Name</th>
					<th scope='col'>Department</th>
					<th scope='col'>Country</th>
					<th scope='col'>Status</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<UserRow key={user.name} user={user} />
				))}
			</tbody>
		</table>
	);
};

export default UsersTable;
