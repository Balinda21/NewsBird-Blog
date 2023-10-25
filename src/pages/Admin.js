// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { LuLoader } from "react-icons/lu";
// import { FiUsers } from "react-icons/fi";
// import { PiUsersThreeFill } from "react-icons/pi";
// import Dashboardcard from "./Dashboardcard";
// import { AiOutlinePlus } from "react-icons/ai";

// function Adminx() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     }
//   }, []);

//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     const getAll = async () => {
//       const response = await fetch(
//         "https://blog-6hj4.onrender.com/api/post/select"
//       );
//       const res = await response.json();
//       setPosts(res.data);
//     };
//     getAll();
//   }, []);

//   console.log("THIS MY POSTS", posts);

//   return (
//     <div>
//       <div className="page_admin">
//         <button className="Addblog">
//           <Link to="/AdminDashboard">
//             <i>
//               <p>
//                 Add Blog
//                 <i class="">
//                   <AiOutlinePlus />
//                 </i>
//               </p>
//             </i>
//           </Link>
//         </button>
//       </div>

//       <section className="grid_container">
//         {posts.length > 0 ? (
//           posts.map((post, index) => (
//             <Dashboardcard
//               id={post._id}
//               key={index}
//               title={post.title}
//               postImage={post.postImage}
//               subheader={post.subheader}
//               content={post.content}
//             />
//           ))
//         ) : (
//           <p>
//             <LuLoader />
//           </p>
//         )}
//       </section>
//     </div>
//   );
// }

// export default Adminx;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuLoader } from "react-icons/lu";
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
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await fetch(
        "https://blog-6hj4.onrender.com/api/post/select"
      );
      const res = await response.json();
      setPosts(res.data);
    };

    const getUsersCount = async () => {
      const response = await fetch(
        "https://blog-6hj4.onrender.com/api/user/selectUsers"
      );
      const data = await response.json();
      setUsersCount(data.length); // Assuming the API response is an array
    };

    getAllPosts();
    getUsersCount();
  }, []);

  return (
    <div>
      <div className="page_admin">
        <button className="Addblog">
          <Link to="/AdminDashboard">
            <i>
              <p>
                Add Blog
                <i className="">
                  <AiOutlinePlus />
                </i>
              </p>
            </i>
          </Link>
        </button>
      </div>

      <section className="grid_container">
        <div className="count-info">
          <div className="count-item">
            <h2>Number of Posts: {posts.length}</h2>
          </div>
          <div className="count-item">
            <h2>Number of Users: {usersCount}</h2>
          </div>
        </div>
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
