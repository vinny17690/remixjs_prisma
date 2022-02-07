import {
	ActionFunction, LoaderFunction, redirect, Form, useLoaderData, useActionData, useTransition,
} from 'remix';
import type { Posts } from '@prisma/client';
import { db } from '~/utils/db.server';

type PostFormData = {
	title: string;
	post: string;
	post_status: string;
	user_id: number;
}

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

export const action: ActionFunction = async ({ request, params }) => {
	const formData = await request.formData();
	const title = formData.get('title');
	const post = formData.get('post');
	const post_status = formData.get('post_status');

	let errors = {};
	if (!title) errors.title = true;
	if (!post) errors.post = true;
	if (!post_status) errors.post_status = true;

	if (Object.keys(errors).length) return errors;

	console.log('Updating post..');
	await db.posts.update({
		where: {
			id: parseInt(params.postId, 10),
		},
		data: {
			title,
			post,
			post_status,
			user_id: 1,
		},
	});

	return redirect(`post/${params.postId}`);
};

export default function PostEdit() {
	const post = useLoaderData<Posts>();
	const errors = useActionData();
	const transition = useTransition();

	return (
		<div className="post-edit-ontainer">
			{errors && <span className="error-message">Your form submitted with errors. Please verify, and re-submit</span>}
			<Form method="post">
				<label htmlFor="title">Post Title:</label>
				<input type="text" name="title" id="title" defaultValue={post.title} />
				<label htmlFor="post">Post Content:</label>
				<textarea defaultValue={post.post} id="post" name="post" />
				<label htmlFor="post_status">Post Status:</label>
				<select name="post_status" id="post_status" defaultValue={post.post_status}>
					<option value="draft">Draft</option>
					<option value="publish">Publish</option>
				</select>
				<button type="submit" value="submit">{transition.submission ? 'Updating..' : 'Update Post'}</button>
			</Form>
		</div>
	);
}
