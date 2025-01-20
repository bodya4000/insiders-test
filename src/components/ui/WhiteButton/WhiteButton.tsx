import { FC } from 'react';
import { Link } from 'react-router';
import styles from './WhiteButton.module.scss';

interface WhiteButtonProps {
	text: string;
	to: string;
	active?: boolean;
}

const WhiteButton: FC<WhiteButtonProps> = ({ text, active, to }) => {
	if (to)
		return (
			<Link to={to} className={`${styles.button} ${active ? styles.button_active : ''}`}>
				{text}
			</Link>
		);

	return <button className={`${styles.button} ${active ? styles.button_active : ''}`}>{text}</button>;
};

export default WhiteButton;
