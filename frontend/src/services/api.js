import axios from "axios";

const API_URL = "http://localhost:3000"; 

export const getPosts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/posts`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener los posts.");
  }
};

export const createPost = async (nuevoPost) => {
  try {
    const { data } = await axios.post(`${API_URL}/posts`, nuevoPost);
    return data;
  } catch (error) {
    throw new Error("Error al crear el post.");
  }
};