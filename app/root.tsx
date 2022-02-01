import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';
import Header from './components/Header';
import stylesUrl from './styles/index.css';

export const meta: MetaFunction = () => ({ title: 'New Remix App' });

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesUrl },
	{ rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
	{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
	{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	);
}
