import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Antony Balende</h2>

      <ul className="nav-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}