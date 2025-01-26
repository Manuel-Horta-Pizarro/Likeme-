function Post({ post }) {
  return (
    <li>
      <h3>{post.titulo}</h3>
      <img src={post.img} alt={post.titulo} style={{ width: "200px" }} />
      <p>{post.descripcion}</p>
    </li>
  );
}

export default Post;