import "./Projets.css";

export default function Projects(){

return(

<section className="projets" id="projets">

<h2>Projets</h2>

<div className="projets-grid">

<div className="projet-card">
<h3>Automatisation Linux</h3>

<p>
Scripts Bash pour automatiser des tâches système
et surveiller les processus Linux.
</p>

<span>Bash • Linux</span>
</div>

<div className="projet-card">
<h3>Application Java</h3>

<p>
Développement d'une application Java
avec manipulation de structures de données
et consommation d'API REST.
</p>

<span>Java • API REST</span>
</div>

<div className="projet-card">
<h3>Site Web Commercial</h3>

<p>
Application web facilitant le suivi des activités
du service commercial.
</p>

<span>PHP • HTML • CSS • MySQL</span>
</div>

</div>

</section>

)

}