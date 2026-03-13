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
              <span>Windows</span>
              <span>Active Directory</span>
              <span>Réseaux</span>
              <span>Support IT</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <h2>À propos</h2>

          <p>
            Étudiante en Bachelor 2 Informatique & Développement à IPPSI Lyon,
            je possède une expérience en support IT, maintenance des systèmes
            et assistance aux utilisateurs.
          </p>

          <p>
            Je souhaite évoluer vers l'administration systèmes et réseaux
            afin de contribuer à la sécurité et à la fiabilité des
            infrastructures informatiques.
          </p>

        </div>

      </div>

    </section>
  );
}