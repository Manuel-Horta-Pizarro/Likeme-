import React from "react";

import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";
import { getPosts, createPost } from "./services/api";

function App() {
  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const posts = await getPosts();
      setPosts(posts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const agregarPost = async () => {
    try {
      const nuevoPost = { titulo, img, descripcion };
      await createPost(nuevoPost);
      fetchPosts();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Gestión de Posts</h1>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Form
        titulo={titulo}
        setTitulo={setTitulo}
        img={img}
        setImg={setImg}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        agregarPost={agregarPost}
      />
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default App;