import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Single() {
  const { _id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://blog-6hj4.onrender.com/api/post/selectById/${_id}`
        );

        if (response.ok) {
          const data = await response.json();
          setPost(data.data);
          setComments(data.data.comments || []);
        } else {
          setError("Failed to fetch post data");
        }
      } catch (error) {
        setError("Error fetching post data: " + error.message);
      }
    };

    fetchData();
  }, [_id]);
  console.log(_id);
  const token = localStorage.getItem("token");
  console.log(token);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (newComment.trim() !== "") {
      try {
        const response = await fetch(
          `https://blog-6hj4.onrender.com/api/post/comment/${_id}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: newComment }),
          }
        );

        if (response.ok) {
          const updatedComments = await response.json();
          setComments(updatedComments);
          setNewComment("");
          setError(null);
          alert("success");
        } else {
          setError("Failed to add comment to the database");
        }
      } catch (error) {
        setError("Error adding comment: " + error.message);
      }
    }
  };

  return (
    <div className="container_re">
      <div className="post">
        <img src={post.postImage} alt="Post Image" className="post-image" />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>

      <div className="comments">
        <h3>Comments</h3>

        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add your comment..."
          className="comment-input"
        />
        <button onClick={handleCommentSubmit} className="comment-button">
          Comment
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Single;
