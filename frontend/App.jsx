import { useEffect, useState } from "react";
import { errorToast } from "./src/utils/toast";
import { getPosts, createPost, likePost, deletePost } from "./src/services/api";
import AddPost from "./src/components/AddPost";
import Post from "./src/components/Post";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch(() => errorToast("Error al obtener los posts"));
  }, []);

  const handleLike = (id) => {
    likePost(id)
      .then(() => {
        
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
          )
        );
      })
      .catch(() => errorToast("Error al dar Me gusta"));
  };

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch(() => errorToast("Error al eliminar el post"));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">📷 Like Me 📷</h1>
      <AddPost
        createPost={(post) => {
          createPost(post)
            .then((newPost) => setPosts([...posts, newPost]))
            .catch(() => errorToast("Error al crear el post"));
        }}
      />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}