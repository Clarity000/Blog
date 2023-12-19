import "./app.css";
import "./components/blog.css";
import { Blog } from "./components/Blog";

function App() {
  return (
    <>
      <header className="title-header">
        <h1>Llama Café</h1>
      </header>
      <section>
        <Blog
          imagen="./src/assets/webp/img-1.webp"
          altImagen="Selva"
          texto="Nuevo Mapa!"
          parrafo="Introducimos el nuevo mapa “North Kidrom”, estará lleno de ubicaciones neuróticas y repletas de adversidades donde podrás encontrar el nuevo item “Mispa”, un artefacto que ta ayudará a encontrar los objetivos de misiones secundarias de una manera más ágil, pero hay un pequeño problema... Nuestra preciada máquina de café está conectada a “Mispa” lo que la hace aparecer y desaparecer dentro de “North Kidrom”, deberas ser rápido y estar atento a todas las señales que te dejará éste preciado item, no cierres los ojos y sigue intentándolo, te prometemos que valdrá la pena cada maldito segundo."
        />
      </section>
      <footer>
        <form action="submit"></form>
        <nav>
          <h4>copyright © 2023-2025</h4>
          <div className="footer-buttons">
            <button className="nav-button">
              <img
                src="./src/assets/webp/instagram-icon.webp"
                alt="instagram-icon"
              />
            </button>
            <button className="nav-button">
              <img
                src="./src/assets/webp/whatsapp-icon.webp"
                alt="whatsapp-icon"
              />
            </button>
            <button className="nav-button">
              <img src="./src/assets/webp/email-icon.webp" alt="email-icon" />
            </button>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;
