// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function Single() {
//   const { _id } = useParams();
//   const [post, setPost] = useState({});
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [error, setError] = useState(null);
//   const [first, setCommenterName] = useState(""); // State for commenter's name
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://blog-6hj4.onrender.com/api/post/selectById/${_id}`
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setPost(data.data);
//           setComments(data.data.comments || []);
//         } else {
//           setError("Failed to fetch post data");
//         }
//       } catch (error) {
//         setError("Error fetching post data: " + error.message);
//       }
//     };

//     fetchData();
//   }, [_id]);

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setCommenterName(e.target.value);
//   };

//   const handleCommentSubmit = async () => {
//     if (newComment.trim() !== "" && first.trim() !== "") {
//       try {
//         const response = await fetch(
//           `https://blog-6hj4.onrender.com/api/post/comment/${_id}`,
//           {
//             method: "POST",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ name: first, content: newComment }),
//           }
//         );

//         if (response.ok) {
//           const updatedComments = await response.json();
//           if (updatedComments.data && updatedComments.data.comments) {
//             setComments(updatedComments.data.comments);
//             setNewComment("");
//             setCommenterName("");
//             setError(null);
//             alert("Comment added successfully");
//           } else {
//             alert("Comment successfully added");
//           }
//         } else {
//           setError("Failed to add comment to the database");
//         }
//       } catch (error) {
//         setError("Error adding comment: " + error.message);
//       }
//     } else {
//       setError("Name and comment cannot be empty");
//     }
//   };

//   return (
//     <div className="container_re">
//       <div className="post">
//         <img src={post.postImage} alt="Post Image" className="post-image" />
//         <h2>{post.title}</h2>
//         <p>{post.content}</p>
//       </div>

//       <div className="comment-form">
//         <input
//           type="text"
//           value={first}
//           onChange={handleNameChange}
//           placeholder="Your Name"
//           className="comment-input"
//         />
//         <input
//           type="text"
//           value={newComment}
//           onChange={handleCommentChange}
//           placeholder="Add your comment..."
//           className="comment-input"
//         />
//         <button onClick={handleCommentSubmit} className="comment-button">
//           Comment
//         </button>
//       </div>

//       <div className="comments">
//         <h3>Comments</h3>
//         <ul id="comment-list">
//           {comments.map((comment, index) => (
//             <li key={index}>
//               <strong>{comment.first}:</strong> {comment.content}
//             </li>
//           ))}
//         </ul>

//         {error && <p className="error-message">{error}</p>}
//       </div>
//     </div>
//   );
// }

// export default Single;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Single() {
  const { _id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

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
          if (updatedComments.data && updatedComments.data.comments) {
            setComments(updatedComments.data.comments);
            setNewComment("");
            setError(null);
            alert("Comment added successfully");
          } else {
            alert("Comment successfully added");
            window.location.reload();
          }
        } else {
          setError("Failed to add comment to the database");
        }
      } catch (error) {
        setError("Error adding comment: " + error.message);
      }
    } else {
      setError("Comment cannot be empty");
    }
  };

  return (
    <div className="container_re">
      <div className="post">
        <img src={post.postImage} alt="Post Image" className="post-image" />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>

      <div className="comment-form">
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
      </div>

      <div className="comments">
        <h3>Comments</h3>
        <ul id="comment-list">
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{}</strong> {comment.content}
            </li>
          ))}
        </ul>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Single;
