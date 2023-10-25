import { React, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import pic1 from "../asset/blog1.jpg";
import { useParams } from "react-router-dom";

function Single() {
  const { _id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await fetch(
        `https://blog-6hj4.onrender.com/api/post/selectById/${_id}`
      );
      const res = await response.json();
      setPosts(res.data);
    };
    getAll();
  }, [_id]);

  return (
    <div class="container_re">
      <div class="post">
        <img src={posts.postImage} alt="Post Image" class="post-image"></img>
        <h2>{posts.title}</h2>

        <p>{posts.content}</p>
      </div>

      <div class="comments">
        <h3>Comments</h3>
        <div id="comment-list"></div>
        <input
          type="text"
          id="comment-input"
          placeholder="Add your comment..."
          class="comment-input"
        ></input>
        <button class="comment-button">Comment</button>
      </div>
    </div>
  );
}

export default Single;
