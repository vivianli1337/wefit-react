// import React, { useEffect, useState } from "react";
// import { FaThumbsUp, FaThumbsDown, FaTrash, FaUserCircle } from "react-icons/fa";

// interface PostProps {
//   posts: { id: number; title: string; message: string; username: string }[];
//   deletePost: (id: number) => void; // Function to delete a post
// }

// export default function Forum({ posts, deletePost }: PostProps) {
//   const [feedback, setFeedback] = useState<{ [key: number]: number }>({});
//   const [selectedFeedback, setSelectedFeedback] = useState<{ [key: number]: string }>({});

//   // Initialize feedback state when posts are updated
//   useEffect(() => {
//     const initialFeedback = posts.reduce((acc, post) => {
//       if (!(post.id in acc)) acc[post.id] = 0; // Ensure all post IDs are initialized
//       return acc;
//     }, feedback);
//     setFeedback(initialFeedback);
//   }, [posts]);

//   const handleThumbsUp = (postId: number) => {
//     setFeedback((prev) => ({
//       ...prev,
//       [postId]: selectedFeedback[postId] === "up" ? prev[postId] - 1 : prev[postId] + 1,
//     }));
//     setSelectedFeedback((prev) => ({
//       ...prev,
//       [postId]: prev[postId] === "up" ? "" : "up",
//     }));
//   };

//   const handleThumbsDown = (postId: number) => {
//     setFeedback((prev) => ({
//       ...prev,
//       [postId]: selectedFeedback[postId] === "down" ? prev[postId] + 1 : prev[postId] - 1,
//     }));
//     setSelectedFeedback((prev) => ({
//       ...prev,
//       [postId]: prev[postId] === "down" ? "" : "down",
//     }));
//   };

//   return (
//     <div className="container">
//       <hr />
//       {posts.map((post) => (
//         <div key={post.id} className="card mb-3">
//           <div className="card-body">
//             <div className="d-flex align-items-center justify-content-between">
//               <div className="d-flex align-items-center">
//                 <FaUserCircle size={40} className="me-3" />
//                 <div>
//                   <p className="mb-0"><strong>{post.username}</strong></p>
//                   <p className="mb-1">Title: {post.title}</p>
//                   <p className="text-muted">{post.message}</p>
//                 </div>
//               </div>
//               <FaTrash
//                 className="text-danger"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => deletePost(post.id)} // Call deletePost with the post ID
//               />
//             </div>
//             <div className="d-flex justify-content-end align-items-center mt-2">
//               {/* Thumbs Up Button */}
//               <FaThumbsUp
//                 className={`me-2 ${selectedFeedback[post.id] === "up" ? "text-success" : ""}`}
//                 style={{ cursor: "pointer", fontSize: "1.5rem" }}
//                 onClick={() => handleThumbsUp(post.id)}
//               />
//               <span className="me-3">{feedback[post.id] ?? 0}</span>
//               {/* Thumbs Down Button */}
//               <FaThumbsDown
//                 className={`me-2 ${selectedFeedback[post.id] === "down" ? "text-danger" : ""}`}
//                 style={{ cursor: "pointer", fontSize: "1.5rem" }}
//                 onClick={() => handleThumbsDown(post.id)}
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaTrash, FaUserCircle } from "react-icons/fa";

interface PostProps {
  posts: { id: number; title: string; message: string; username: string }[];
  deletePost: (id: number) => void;
  isAuthenticated: boolean;
}

export default function Forum({ posts, deletePost, isAuthenticated }: PostProps) {
  const [feedback, setFeedback] = useState<{ [key: number]: number }>({});
  const [selectedFeedback, setSelectedFeedback] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const initialFeedback = posts.reduce((acc, post) => {
      if (!(post.id in acc)) acc[post.id] = 0;
      return acc;
    }, feedback);
    setFeedback(initialFeedback);
  }, [posts]);

  const handleThumbsUp = (postId: number) => {
    if (!isAuthenticated) return;
    setFeedback((prev) => ({
      ...prev,
      [postId]: selectedFeedback[postId] === "up" ? prev[postId] - 1 : prev[postId] + 1,
    }));
    setSelectedFeedback((prev) => ({
      ...prev,
      [postId]: prev[postId] === "up" ? "" : "up",
    }));
  };

  const handleThumbsDown = (postId: number) => {
    if (!isAuthenticated) return;
    setFeedback((prev) => ({
      ...prev,
      [postId]: selectedFeedback[postId] === "down" ? prev[postId] + 1 : prev[postId] - 1,
    }));
    setSelectedFeedback((prev) => ({
      ...prev,
      [postId]: prev[postId] === "down" ? "" : "down",
    }));
  };

  return (
    <div className="container">
      <hr />
      {posts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <FaUserCircle size={40} className="me-3" />
                <div>
                  <p className="mb-0"><strong>{post.username}</strong></p>
                  <p className="mb-1">Title: {post.title}</p>
                  <p className="text-muted">{post.message}</p>
                </div>
              </div>
              {isAuthenticated && (
                <FaTrash
                  className="text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => deletePost(post.id)}
                />
              )}
            </div>
            <div className="d-flex justify-content-end align-items-center mt-2">
              <FaThumbsUp
                className={`me-2 ${selectedFeedback[post.id] === "up" ? "text-success" : ""}`}
                style={{
                  cursor: isAuthenticated ? "pointer" : "not-allowed",
                  fontSize: "1.5rem",
                  opacity: isAuthenticated ? 1 : 0.5,
                }}
                onClick={() => handleThumbsUp(post.id)}
              />
              <span className="me-3">{feedback[post.id] ?? 0}</span>
              <FaThumbsDown
                className={`me-2 ${selectedFeedback[post.id] === "down" ? "text-danger" : ""}`}
                style={{
                  cursor: isAuthenticated ? "pointer" : "not-allowed",
                  fontSize: "1.5rem",
                  opacity: isAuthenticated ? 1 : 0.5,
                }}
                onClick={() => handleThumbsDown(post.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
