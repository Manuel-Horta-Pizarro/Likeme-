import { useState } from "react";

function AddPost({ createPost }) {
  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ titulo, img, descripcion });
    setTitulo("");
    setImg("");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      </div>
      <div>
        <label>Imagen</label>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
      </div>
      <div>
        <label>Descripción</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      </div>
      <button type="submit">Agregar Post</button>
    </form>
  );
}

export default AddPost;