import { ChangeEvent, FC, useMemo } from 'react';
import { generateId } from '../../../../utils/functions';
import styles from './DefaultSelect.module.scss';

interface DefaultSelectProps {
	value: string;
	onChange: (option: { name: string; value: string } | string) => void;
	options: { name: string; value: string }[] | string[];
	label?: string;
	className?: string;
	disabled?: boolean;
}

const DefaultSelect: FC<DefaultSelectProps> = ({ disabled, value, onChange, options, label, className }) => {
	const randomGeneratedId = useMemo(() => generateId('select'), []);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		const selectedOption = typeof options[0] === 'string' ? selectedValue : (options as { name: string; value: string }[]).find(option => option.value === selectedValue);
		if (selectedOption) {
			onChange(selectedOption);
		}
	};

	return (
		<div className={`${styles.container} ${className || ''} ${disabled && styles.container_disabled}`}>
			{label && (
				<label className={styles.label} htmlFor={randomGeneratedId}>
					{label}
				</label>
			)}
			<select className={styles.select} id={randomGeneratedId} value={value} onChange={handleChange}>
				{options.map(option =>
					typeof option === 'string' ? (
						<option key={option} className={styles.option} value={option}>
							{option}
						</option>
					) : (
						<option key={option.value} className={styles.option} value={option.value}>
							{option.name}
						</option>
					)
				)}
			</select>
		</div>
	);
};

export default DefaultSelect;
