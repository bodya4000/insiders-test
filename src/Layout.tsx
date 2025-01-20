import { Outlet } from 'react-router';
import Header from './components/ui/Header/Header';

function Layout() {
	return (
		<>
			<Header />

			<main id='detail'>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
