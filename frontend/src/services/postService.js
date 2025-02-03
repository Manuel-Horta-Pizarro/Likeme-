const API_URL = "http://localhost:3000/api/posts";

export const getPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener los posts");
  return response.json();
};

export const addPost = async (post) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("Error al agregar el post");
  return response.json();
};

export const likePost = async (postId) => {
  const response = await fetch(`${API_URL}/${postId}/like`, {
    method: "PATCH",
  });
  if (!response.ok) throw new Error("Error al dar like al post");
  return response.json();
};

export const deletePost = async (postId) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar el post");
  return response.json();
};
