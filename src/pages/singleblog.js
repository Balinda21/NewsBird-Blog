import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../asset/blog1.jpg";

function Single() {
  return (
    <div class="container_re">
      <div class="post">
        <img src={pic1} alt="Post Image" class="post-image"></img>
        <h2>War victims</h2>
        <p>
          Gaza City – Fatima el-Alayan sits in her wheelchair, surrounded by her
          family and hundreds of other people in Shifa Hospital. The 80-year-old
          grandmother’s deeply lined face is resigned. Displacement is not a new
          experience for her but, she says, this time feels somehow worse than
          the Nakba she lived through in 1948. “We don’t have any food,” Fatima
          said. “This is far harder than what I remember from 1948. The Israelis
          keep killing children.”
        </p>
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
