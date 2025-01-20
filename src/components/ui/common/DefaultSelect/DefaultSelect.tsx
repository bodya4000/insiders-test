import { FC, useMemo } from 'react';
import styles from './DefaultSelect.module.scss';

interface DefaultSelectProps {
	options: string[];
	label?: string;
}

const DefaultSelect: FC<DefaultSelectProps> = ({ label, options }) => {
	const randomGeneratedId = useMemo(() => `select-${Math.random().toString(36).substr(2, 9)}`, []);
	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={randomGeneratedId}>
				{label}
			</label>
			<select className={styles.select} name={label} id={randomGeneratedId}>
				{options.map(option => {
					return (
						<option key={option} className={styles.option} value={option}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DefaultSelect;
