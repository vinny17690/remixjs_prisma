import type { LoaderFunction, MetaFunction } from 'remix';
import { Link, useLoaderData } from 'remix';
import type { Posts } from '@prisma/client';
import { db } from '../utils/db.server';

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
		<div className="site-container" id="main">
			{ posts.length && posts.map((post: Posts) => (
				<div key={post.id} className="post-container">
					<Link className="post-title" to={`/post/${post.id}/`}>{post.title}</Link>
					<span className="post-status">{post.post_status}</span>
					<p className="post-content">{post.post}</p>
				</div>
			)) }
		</div>
	);
}
