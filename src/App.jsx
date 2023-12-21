import "./app.css";
import "./components/blog.css";
import "./components/nav.css";
import "./components/contact.css";
import { Blog } from "./components/Blog";
import { Nav } from "./components/Nav";
import { Contact } from "./components/Contact";

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
        <Blog
          imagen="./src/assets/webp/img-1.webp"
          altImagen="Selva"
          texto="Nuevo Mapa!"
          parrafo="Introducimos el nuevo mapa “North Kidrom”, estará lleno de ubicaciones neuróticas y repletas de adversidades donde podrás encontrar el nuevo item “Mispa”, un artefacto que ta ayudará a encontrar los objetivos de misiones secundarias de una manera más ágil, pero hay un pequeño problema... Nuestra preciada máquina de café está conectada a “Mispa” lo que la hace aparecer y desaparecer dentro de “North Kidrom”, deberas ser rápido y estar atento a todas las señales que te dejará éste preciado item, no cierres los ojos y sigue intentándolo, te prometemos que valdrá la pena cada maldito segundo."
        />
        <Blog
          imagen="./src/assets/webp/img-1.webp"
          altImagen="Selva"
          texto="Nuevo Mapa!"
          parrafo="Introducimos el nuevo mapa “North Kidrom”, estará lleno de ubicaciones neuróticas y repletas de adversidades donde podrás encontrar el nuevo item “Mispa”, un artefacto que ta ayudará a encontrar los objetivos de misiones secundarias de una manera más ágil, pero hay un pequeño problema... Nuestra preciada máquina de café está conectada a “Mispa” lo que la hace aparecer y desaparecer dentro de “North Kidrom”, deberas ser rápido y estar atento a todas las señales que te dejará éste preciado item, no cierres los ojos y sigue intentándolo, te prometemos que valdrá la pena cada maldito segundo."
        />
      </section>
      <footer>
        <Contact />
        <Nav />
      </footer>
    </>
  );
}

export default App;
