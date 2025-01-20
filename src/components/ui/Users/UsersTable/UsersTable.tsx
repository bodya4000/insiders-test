import { FC } from 'react';
import { useUsersSelector } from '../../../../state/store';
import UserRow from './UserRow/UserRow';
import styles from './UsersTable.module.scss';

const UsersTable: FC = () => {
	const { users } = useUsersSelector();

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
