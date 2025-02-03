import React from "react";

const CardPost = ({ post, onLike, onDelete }) => {
  return (
    <div className="card">
  <h3>{post.title}</h3>
  <img src={post.img} alt={post.title} />
  <p>{post.description}</p>
  <p>👍 Me gusta: {post.likes}</p>
  <button onClick={() => onLike(post.id)}>👍 Me gusta</button>
  <button onClick={() => onDelete(post.id)}>🗑️ Eliminar</button>
</div>
  );
};

export default CardPost;