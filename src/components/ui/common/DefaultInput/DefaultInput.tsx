import { ChangeEvent, FC, useMemo } from 'react';
import { generateId } from '../../../../utils/functions';
import styles from './DefaultInput.module.scss';

interface DefaultInputProps {
	value: string;
	onChange: (text: string) => void;
	placeholder?: string;
	label?: string;
}

const DefaultInput: FC<DefaultInputProps> = ({ label, placeholder, onChange, value }) => {
	const randomGeneratedId = useMemo(() => generateId('input'), []);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={randomGeneratedId}>
				{label}
			</label>
			<input onChange={handleChange} value={value} placeholder={placeholder} type='text' className={styles.input} />
		</div>
	);
};

export default DefaultInput;
