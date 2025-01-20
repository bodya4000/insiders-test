import { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router';
import styles from './WhiteButton.module.scss';

interface WhiteButtonProps {
	disabled?:boolean;
	text: string;
	to?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	active?: boolean;
}

const WhiteButton: FC<WhiteButtonProps> = ({ text, active, to, onClick, disabled}) => {
	
	if (to)
		return (
			<Link to={to} className={`${styles.button} ${active ? styles.button_active : ''} ${disabled ? styles.button_disable : ''}`}>
				{text}
			</Link>
		);

	return <button disabled={disabled} onClick={onClick} className={`${styles.button} ${active ? styles.button_active : ''} ${disabled ? styles.button_disable : ''}`}>{text}</button>;
};

export default WhiteButton;
