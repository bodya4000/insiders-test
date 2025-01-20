import { FC } from 'react';
import common from '../../../index.module.scss';
import FilterBox from '../../ui/Users/FilterBox/FilterBox';
import UsersTable from '../../ui/Users/UsersTable/UsersTable';
import styles from './Users.module.scss';

const Users: FC = () => {
	return (
		<div className={`${common.wrapper} ${styles.edit}`}>
			<h1 className={styles.title}>USERS</h1>
			<FilterBox />
			<UsersTable />
		</div>
	);
};

export default Users;
