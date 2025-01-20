import { FC } from 'react';
import common from '../../../index.module.scss';
import UserInformation from '../../ui/Edit/UserInformation/UserInformation';
import UserSelect from '../../ui/Edit/UserSelect/UserSelect';
import styles from './Edit.module.scss';

const Edit: FC = () => {
	return (
		<div className={`${common.wrapper} ${styles.edit}`}>
			<h1 className={styles.title}>EDIT USER</h1>
			<UserSelect />
			<UserInformation />
		</div>
	);
};

export default Edit;
