import { FC } from 'react';
import common from '../../../index.module.scss';
import styles from './Users.module.scss';
import UsersTable from '../../ui/Users/UsersTable/UsersTable'

const Users: FC = () => {
	return (
		<div className={`${common.wrapper} ${styles.edit}`}>
			<h1 className={styles.title}>USERS</h1>

			<UsersTable/>
		</div>
	);
};

export default Users;
