import React, { FC } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}
const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

  const handlerRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)

  }

  const handlerUpdate = (event: React.MouseEvent) => {

    const title = prompt() || ""
    update({...post, title})

  }
  return (
    <div className="post" onClick={handlerUpdate}>
        {post.id}. {post.title}
        <button onClick={handlerRemove}>DELETE</button>
        
    </div>
  )
}

export default  PostItem