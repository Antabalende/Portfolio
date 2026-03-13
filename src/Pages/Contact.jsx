import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact(){

return(

<section className="contact" id="contact">

<h2>Contact</h2>

<p>N'hésitez pas à me contacter pour toute opportunité de stage ou d'une alternance.</p>

<div className="contact-grid">

<div className="contact-card">
<FaEnvelope className="icon"/>
<h3>Email</h3>
<p>a.balende@ecole-ipssi.net</p>
</div>

<div className="contact-card">
<FaPhone className="icon"/>
<h3>Téléphone</h3>
<p>07 49 93 00 97</p>
</div>

<div className="contact-card">
<FaMapMarkerAlt className="icon"/>
<h3>Ville</h3>
<p>Lyon, France</p>
</div>

<div className="contact-card">
<FaLinkedin className="icon"/>
<h3>LinkedIn</h3>
<a href="https://www.linkedin.com/in/antony-balende-687baa39b/" target="_blank">Voir profil</a>
</div>

<div className="contact-card">
<FaGithub className="icon"/>
<h3>GitHub</h3>
<a href="https://github.com" target="_blank">Voir profil</a>
</div>

</div>

</section>

);

}