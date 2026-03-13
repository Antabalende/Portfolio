import "./About.css";
import photo from "../assets/images/photo.png";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="photo-card">
          <img src={photo} alt="Antony Balende" />

          <div className="photo-info">
            <h3>Antony BALENDE</h3>
            <p>Support IT • Administation Systèmes & Réseaux</p>

            <div className="badges">
              <span>Windows Server</span>
              <span>Active Directory</span>
              <span>Linux </span>
              <span>Support systèmes & réseaux</span>
              <span>MySQL</span>
              <span>Cisco</span>
              <span>Gestion des identités et accès</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <h2>À propos</h2>

          <p>
            Étudiante en Bachelor 2 Informatique & Développement à IPPSI Lyon, je possède une expérience en support IT, maintenance des systèmes et assistance aux utilisateurs. Au cours de mes expériences, j’ai développé des compétences en diagnostic et résolution d’incidents, installation et configuration de postes informatiques, ainsi qu’en support technique et accompagnement des utilisateurs.
          </p>
          <p> 
            Je dispose également de compétences en développement (Java, Php, scripts Bash, utilisation d’API) et de notions en sécurité informatique, notamment en gestion des accès, analyse de trafic réseau et sécurisation des systèmes.
          </p>
          <p>
            Passionnée par les systèmes, les réseaux et la cybersécurité, je souhaite évoluer vers l’administration systèmes et réseaux afin de contribuer à la sécurité, la performance et la fiabilité des infrastructures informatiques.
          </p>
        </div>

      </div>

    </section>
  );
}