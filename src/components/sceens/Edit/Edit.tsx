import { FC } from 'react';
import common from '../../../index.module.scss';
import UserSelect from '../../ui/Edit/UserSelect/UserSelect';
import styles from './Edit.module.scss';

const Edit: FC = () => {
	return (
		<div className={common.wrapper}>
			<h1 className={styles.title}>EDIT USER</h1>
			<UserSelect />
		</div>
	);
};

export default Edit;
