import { FC, useMemo } from 'react';
import { generateId } from '../../../../utils/functions';
import styles from './DefaultInput.module.scss';

interface DefaultInputProps {
	label?: string;
}

const DefaultInput: FC<DefaultInputProps> = ({ label }) => {
	const randomGeneratedId = useMemo(() => generateId('input'), []);

	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={randomGeneratedId}>{label}</label>
			<input type='text' className={styles.input} value={'Oleg Shevchenko'} />
		</div>
	);
};

export default DefaultInput;
