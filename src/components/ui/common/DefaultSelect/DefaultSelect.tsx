import { ChangeEvent, FC, useMemo } from 'react';
import { generateId } from '../../../../utils/functions';
import styles from './DefaultSelect.module.scss';

interface DefaultSelectProps {
	value: string;
	onChange: (option: { name: string; value: string } | string) => void;
	options: { name: string; value: string }[] | string[];
	label?: string;
	className?: string;
}

const DefaultSelect: FC<DefaultSelectProps> = ({ value, onChange, options, label, className }) => {
	const randomGeneratedId = useMemo(() => generateId('select'), []);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;

		// Знаходимо відповідний об'єкт
		const selectedOption =
			typeof options[0] === 'string'
				? selectedValue // Якщо це масив рядків, повертаємо рядок
				: (options as { name: string; value: string }[]).find(option => option.value === selectedValue); // Знаходимо об'єкт

		// Передаємо знайдений об'єкт у onChange
		if (selectedOption) {
			onChange(selectedOption);
		}
	};

	return (
		<div className={`${styles.container} ${className || ''}`}>
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
