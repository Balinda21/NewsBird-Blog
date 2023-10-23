import React from "react";
import { Link } from "react-router-dom";
// import Single from "../pages/singleblog";

export const Card = ({ postImage, title, content, subheader }) => {
  return (
    <div className="card">
      <div class="card-img-holder">
        <img src={postImage} alt=" postImage" />
      </div>
      <h3 className="blog-title">{title}</h3>
      <span className="blog-time">{subheader}</span>
      <p className="description">{content}</p>
      <div className="options">
        <button className="btn">
          Full article <Link to="/singleblog"></Link>{" "}
        </button>
      </div>
    </div>
  );
};
export default Card;
