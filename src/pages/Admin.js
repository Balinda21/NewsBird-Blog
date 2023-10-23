import React, { useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Dashboardcard from "./Dashboardcard";
import { AiOutlinePlus } from "react-icons/ai";

function Adminx() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const response = await fetch(
        "https://blog-6hj4.onrender.com/api/post/select"
      );
      const res = await response.json();
      setPosts(res.data);
    };
    getAll();
  }, []);

  console.log("THIS MY POSTS", posts);

  return (
    <div>
      <div className="page_admin">
        <button className="Addblog">
          <Link to="/AdminDashboard">
            <i>
              <p>
                Add Blog
                <i class="">
                  <AiOutlinePlus />
                </i>
              </p>
            </i>
          </Link>
        </button>
      </div>
      <section className="grid_container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Dashboardcard
              id={post._id}
              key={index}
              title={post.title}
              postImage={post.postImage}
              subheader={post.subheader}
              content={post.content}
            />
          ))
        ) : (
          <p>
            <LuLoader />
          </p>
        )}
      </section>
    </div>
  );
}

export default Adminx;
