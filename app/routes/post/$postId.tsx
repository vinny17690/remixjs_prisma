import type { LoaderFunction } from 'remix';
import { Link, useLoaderData } from 'remix';
import type { Posts } from '@prisma/client';
import { db } from '../../utils/db.server';

export const loader: LoaderFunction = async ({ params }) => {
	const { postId } = params;

	if (postId) {
		const posts = await db.posts.findUnique({
			where: {
				id: parseInt(postId),
			},
		});

		return posts;
	}

	return null;
};

export default function PostId() {
	const post = useLoaderData<Posts>();
	return (
		<div key={post.id}>
			<Link to={`/post/${post.id}`}>{post.title}</Link>
			<span>{post.post_status}</span>
			<p>{post.post}</p>
		</div>
	);
}