import React from "react";
import './post.css'
import post from './pexels-lisa-fotios-1083822.jpg'

function Post() {
  return (
    <div className="post">
      <img className="postImg" src={post} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className="postDate">1hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        excepturi veniam aut dolorem ullam repellat deserunt nemo modi
        blanditiis nihil, voluptates quasi! Molestias non, veritatis blanditiis
        exercitationem eligendi illo ipsum?
      </p>
    </div>
  );
}

export default Post;
