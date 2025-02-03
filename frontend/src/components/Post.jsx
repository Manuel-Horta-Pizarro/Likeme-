import TrashIcon from "./icons/TrashIcon";

function Post({ post, onLike, onDelete }) {
  return (
    <div className="card">
      <h3>{post.titulo}</h3>
      <img src={post.img} alt={post.titulo} style={{ width: "200px" }} />
      <p>{post.descripcion}</p>
      <p>👍 Me gusta: {post.likes}</p>
      <button onClick={() => onLike(post.id)}>👍 Me gusta</button>
      <button onClick={() => onDelete(post.id)}>
        <TrashIcon width="20px" height="20px" fill="red" /> Eliminar
      </button>
    </div>
  );
}

export default Post;