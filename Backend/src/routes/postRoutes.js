import Router from 'express';
import {createPost, getPosts, updatePost, deletePost} from '../controller/postController.js';

const postRouter=Router();

postRouter.route('/create').post(createPost);
postRouter.route('/get').get(getPosts);
postRouter.route('/update/:id').patch(updatePost);
postRouter.route('/delete/:id').delete(deletePost);


export default postRouter;