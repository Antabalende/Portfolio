import "./Home.css";

export default function Home() {

return(

<section className="home" id="home">

<div className="home-text">

<h2>Je suis,</h2>

<h1>Antony Balende</h1>

<h3>Support IT • Systèmes & Réseaux</h3>

<p>
Étudiante en Bachelor Informatique à IPPSI Lyon.
Je recherche un stage de 4 mois dans le domaine
du support IT, systèmes et réseaux.
</p>

<div className="buttons">

<a href="#projects" className="btn">
Voir mes projets
</a>

<a href="/cv.pdf" className="btn-outline">
Télécharger mon CV
</a>

</div>

</div>

<div className="home-image">

<img src="/photo.jpg" alt="profile"/>

</div>

</section>

);

}