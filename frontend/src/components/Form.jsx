function Form({
  titulo,
  setTitulo,
  img,
  setImg,
  descripcion,
  setDescripcion,
  agregarPost,
}) {
  return (
    <form
  className="form"
  onSubmit={(e) => {
    e.preventDefault();
    agregarPost();
  }}
>
    
      <div>
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Imagen</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Agregar Post</button>
    </form>
  );
}

export default Form;
