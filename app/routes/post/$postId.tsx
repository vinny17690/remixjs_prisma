import type { LoaderFunction } from 'remix';
import { Link, useLoaderData } from 'remix';
import type { Posts } from '@prisma/client';
import { db } from '~/utils/db.server';

export const loader: LoaderFunction = async ({ params }) => {
	const { postId } = params;

	if (postId) {
		const posts = await db.posts.findUnique({
			where: {
				id: parseInt(postId, 10),
			},
		});

		return posts;
	}

	return null;
};

export default function PostId() {
	const post = useLoaderData<Posts>();
	return (
		<div key={post.id} className="post-container">
			<div className="post-meta-container">
				<div className="title-container">
					<Link className="post-title" to={`/post/${post.id}`}>{post.title}</Link>
					<span className="post-status">{post.post_status}</span>
				</div>
				<div className="edit-button">
					<Link to={`/post/${post.id}/edit`}>Edit</Link>
				</div>
			</div>
			<p className="post-content">{post.post}</p>
		</div>
	);
}
