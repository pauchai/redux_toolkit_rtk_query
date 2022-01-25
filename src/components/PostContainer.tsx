import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import {postAPI} from "../services/PostService"
import PostItem from './PostItem';

const PostContainer = () => {
    const {data:posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    console.log(error)
  return (
    <div>
        <div className="post__list">
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
