import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { IPost } from '../models/IPost';
import {postAPI} from "../services/PostService"
import PostItem from './PostItem';

const PostContainer = () => {
    const {data:posts, error, isLoading} = postAPI.useFetchAllPostsQuery(15)

    const [createPost, {error: createError, isLoading: createIsLoading} ] = postAPI.useCreatePostMutation()
    const handleCreatePost = async () => {
      const title = prompt()
      await createPost({title, body:title} as IPost)
    }
  return (
    <div>
        <div className="post__list">
          <button onClick={handleCreatePost}>Add new post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{(error as FetchBaseQueryError).status}</h1>}
            {posts && posts.map(post => 
                <PostItem key={post.id} post={post} />
            )}
        </div>
    </div>
  )
}

export default PostContainer;
