import { Outlet } from 'react-router';
import Header from './components/ui/Header/Header';
import styles from './index.module.scss'

function Layout() {
	return (
		<div className={styles.layout}>
			<Header />

			<main id='detail'>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
