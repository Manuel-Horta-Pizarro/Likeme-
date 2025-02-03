const { getAllPosts, createPost, likePost, deletePost } = require("../models/postModels");

const getPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    res.status(500).json({ error: "Error al obtener los posts" });
  }
};

const addPost = async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  if (!titulo || !img || !descripcion) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }
  try {
    const newPost = await createPost(titulo, img, descripcion);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al crear el post:", error);
    res.status(500).json({ error: "Error al crear el post" });
  }
};

const updateLike = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await likePost(id);
    res.json(updatedPost);
  } catch (error) {
    console.error("Error al actualizar el post:", error);
    res.status(500).json({ error: "Error al actualizar el post" });
  }
};

const removePost = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePost(id);
    res.json({ message: "Post eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    res.status(500).json({ error: "Error al eliminar el post" });
  }
};

module.exports = { getPosts, addPost, updateLike, removePost };