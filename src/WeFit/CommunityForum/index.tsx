// import React, { useState } from "react";
// import PostForm from "./Post";
// import Forum from "./Forum";

// interface Post {
//   id: number;
//   title: string;
//   message: string;
//   username: string;
// }

// export default function App() {
//   const [posts, setPosts] = useState<Post[]>([]);

//   // Function to add a new post
//   const addPost = (title: string, message: string) => {
//     const newPost: Post = {
//       id: posts.length + 1, // Generate a unique ID for the post
//       title,
//       message,
//       username: "username", // Replace with the actual username if needed
//     };
//     setPosts([newPost, ...posts]); // Add the new post to the top of the list
//   };

//   // Function to delete a post by its ID
//   const deletePost = (id: number) => {
//     setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); // Remove the post with the matching ID
//   };

//   return (
//     <div>
//       <PostForm addPost={addPost} />
//       <Forum posts={posts} deletePost={deletePost} /> {/* Pass deletePost */}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import PostForm from "./Post";
import Forum from "./Forum";
import { useLocation } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  message: string;
  username: string;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("/wefit/communityforum")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [pathname]);

  // Function to add a new post
  const addPost = (title: string, message: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      message,
      username: "username", // Replace with actual username if needed
    };
    setPosts([newPost, ...posts]);
  };

  // Function to delete a post by its ID
  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <PostForm addPost={addPost} isAuthenticated={isAuthenticated} />
      <Forum posts={posts} deletePost={deletePost} isAuthenticated={isAuthenticated} />
    </div>
  );
}
