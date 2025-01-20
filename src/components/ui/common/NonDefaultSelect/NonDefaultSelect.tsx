import { FC } from 'react';
import styles from './NonDefaultSelect.module.scss';

interface NonDefaultSelectProps {
	counter?: number;
	active: string[];
	options: { name: string; value: string }[];
	show: boolean;
	onClick: () => void;
	onTrue?: (option: string) => void;
	onFalse?: (option: string) => void;
	onChange?: (option: string) => void;
	disabled?: boolean;
}

const NonDefaultSelect: FC<NonDefaultSelectProps> = ({ show, onClick, options, counter, onTrue, onFalse, disabled, active, onChange }) => {
	const handleCheckboxChange = (checked: boolean, value: string) => {
		if (onFalse && onTrue) {
			if (checked) {
				onTrue(value);
			} else {
				onFalse(value);
			}
		} else if (onChange) {
			onChange(value);
		}
	};

	return (
		<div className={`${styles.selected} ${disabled && styles.selected__disabled}`}>
			<h3 onClick={onClick}>Selected ({counter || 0})</h3>
			{show && (
				<ul className={styles.selected__list}>
					{options.map(option => (
						<li key={option.value} className={styles.selected__list_item}>
							<div className={styles['checkbox-container']}>
								<input
									checked={active.includes(option.value)}
									type='checkbox'
									className={styles['checkbox-container_checkbox']}
									id={`checkbox-${option.value}`}
									onChange={e => handleCheckboxChange(e.target.checked, option.value)}
									disabled={disabled}
								/>
								<label htmlFor={`checkbox-${option.value}`} className={styles['checkbox-container_custom']}>
									{option.name}
								</label>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NonDefaultSelect;
