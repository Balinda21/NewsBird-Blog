// import React, { PureComponent } from "react";

// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Scatter,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490,
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590,
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350,
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480,
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460,
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380,
//   },
// ];

// export default class Graph extends PureComponent {
//   static demoUrl = "https://codesandbox.io/s/simple-composed-chart-h9zif";

//   render() {
//     return (
//       <div className="Graph_1" width="100%" height="100%">
//         <ComposedChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis dataKey="name" scale="band" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//           <Bar dataKey="pv" barSize={20} fill="#413ea0" />
//           <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//           <Scatter dataKey="cnt" fill="red" />
//         </ComposedChart>
//       </div>
//     );
//   }
// }

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LineCharts() {
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    // Fetch total posts
    fetch("https://blog-6hj4.onrender.com/api/post/select")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    // Fetch total comments
    fetch("https://node-app-plsi.onrender.com/api/klab/comment/read")
      .then((response) => response.json())
      .then((data) => {
        setCommentData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  const postNumber = postData.length;
  const commentLength = commentData.length;

  const data = [
    {
      name: "Posts",
      uv: postNumber,
    },
    {
      name: "Comments",
      uv: commentLength,
    },
  ];

  return (
    <div className="line-chart">
      <ResponsiveContainer width="50%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#0000FF"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
