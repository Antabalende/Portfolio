import "./Home.css";
import { FaDownload } from "react-icons/fa";
import photo from "../assets/images/photo.png";

export default function Home() {

return(

<section className="home" id="home">

<div className="home-text">

<h2>Je suis,</h2>

<h1>Antony Balende</h1>

<h3>Admin Systèmes & Réseaux • Support IT</h3>

<p>
Étudiante en 2e année Bachelor d'Informatique et Développement à IPPSI Lyon.
Je recherche un stage de 4 mois dans le domaine
de l'administration systèmes et réseaux et Support IT.
</p>

<div className="buttons">

<a href="#projects" className="btn">
Voir mes projets
</a>

<a href="/Balende-Antony-cv(10).pdf" download className="btn-outline">
  <FaDownload /> Télécharger mon CV
</a>

</div>

</div>

<div className="home-image">

<img src={photo} alt="profile" />

</div>

</section>

);

}