import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './index.module.scss';
import Layout from './Layout.tsx';

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
				element: <>user list</>,
			},
			{
				path: 'edit',
				element: <>user edit</>,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<>
		<RouterProvider router={router} />
	</>
);
