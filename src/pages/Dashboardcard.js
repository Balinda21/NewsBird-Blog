import React from "react";
import axios from "axios";

const Dashboardcard = ({ id, postImage, title, content, subheader }) => {
  function deleteRecord(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // console.log("Token", token);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log("Get token", headers);

    const Data = {
      id: id,
    };
    axios
      .delete(`https://blog-6hj4.onrender.com/api/post/delete/${id}`, {
        headers: headers,
        data: Data,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Data deleted successfully");
          // Optionally, you can trigger a re-render or update your UI here.
        } else {
          alert("Failed to delete data");
        }
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Failed to delete data");
      });
  }

  return (
    <div>
      <div className="card-img-holder">
        <img src={postImage} alt="Blog image" />
      </div>
      <h3 className="blog-title">{title}</h3>
      <span className="blog-time">{subheader}</span>
      <p className="description">{content}</p>
      <div className="options">
        <li className="btn">Edit</li>
        <li className="btn" onClick={deleteRecord}>
          Delete
        </li>
      </div>
    </div>
  );
};

export default Dashboardcard;
