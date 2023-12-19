export function Blog({ imagen, altImagen, texto, parrafo }) {
  return (
    <main className="blog">
      <header className="blog-header">
        <img className="blog-img" src={imagen} alt={altImagen} />
      </header>
      <article className="blog-article">
        <h2>{texto}</h2>
        <p className="blog-pharagraph">{parrafo}</p>
      </article>
      <div></div>
      <div className="blog-buttons">
        <button className="blog-button">
          <img
            className="buttons-img"
            src="./src/assets/webp/like-button.webp"
            alt="like-button"
          />
        </button>
        <button className="blog-button">
          <img
            className="buttons-img"
            src="./src/assets/webp/comment-button.webp"
            alt="comment-button"
          />
        </button>
        <button className="blog-button">
          <img
            className="buttons-img"
            src="./src/assets/webp/send-button.webp"
            alt="send-button"
          />
        </button>
      </div>
    </main>
  );
}
