import type { LoaderFunction, LinksFunction, MetaFunction } from 'remix';
import { Link, useLoaderData } from 'remix';
import type { Posts } from '@prisma/client';
import { db } from '../utils/db.server';
import stylesUrl from '../styles/index.css';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesUrl },
	{ rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
	{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
	{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' },
];

export const loader: LoaderFunction = async () => {
	const allPosts: Array<Posts> = await db.posts.findMany();
	return allPosts;
};

export const meta: MetaFunction = () => ({
	title: 'Remix + Prisma App!',
	description: 'Simple Remix JS App with Prisma Client.',
});

export default function Index() {
	const posts = useLoaderData();

	return (
		<div>
			{ posts.length && posts.map((post: Posts) => (
				<div key={post.id} className="container">
					<Link to={`/post/${post.id}`}>{post.title}</Link>
					<span>{post.post_status}</span>
					<p>{post.post}</p>
				</div>
			)) }
		</div>
	);
}
