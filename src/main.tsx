import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Edit from './components/sceens/Edit/Edit.tsx';
import Users from './components/sceens/Users/Users.tsx';
import './index.module.scss';
import Layout from './Layout.tsx';
import { store } from './state/store.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <>error</>,
		children: [
			{
				index: true,
				element: <Navigate to='/users' replace />,
			},
			{
				path: 'users',
				element: <Users />,
			},
			{
				path: 'edit',
				element: <Edit />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</>
);
