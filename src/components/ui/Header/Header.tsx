import { FC } from 'react';
import { useLocation } from 'react-router';
import WhiteButton from '../WhiteButton/WhiteButton';
import styles from './Header.module.scss';

const Header: FC = () => {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<header className={styles.header}>
			<nav className={styles.header_nav}>
				<WhiteButton active={location.pathname == '/edit'} to={'/edit'} text={'Edit users'} />
				<WhiteButton active={location.pathname == '/users'} to={'/users'} text={'Users'} />
			</nav>
		</header>
	);
};

export default Header;
