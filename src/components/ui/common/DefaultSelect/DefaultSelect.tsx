import { FC, useMemo } from 'react';
import { generateId } from '../../../../utils/functions';
import styles from './DefaultSelect.module.scss';

interface DefaultSelectProps {
	options: string[];
	label?: string;
	className?: string;
}

const DefaultSelect: FC<DefaultSelectProps> = ({ label, options, className }) => {
	const randomGeneratedId = useMemo(() => generateId('select'), []);
	return (
		<div className={`${styles.container} ${className && className}`}>
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
