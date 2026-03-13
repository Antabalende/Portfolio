import { FaNetworkWired, FaDatabase, FaWindows } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import "./Skills.css";

export default function Skills(){

return(

<section className="skills" id="skills">

<h2>Compétences</h2>

<div className="skills-grid">

<div className="skill-card">
<div className="icon"><MdSupportAgent/></div>
<h3>Support IT</h3>
<p>Support utilisateurs</p>
<p>Assistance à distance</p>
</div>

<div className="skill-card">
<div className="icon"><FaWindows/></div>
<h3>Systèmes</h3>
<p>Windows</p>
<p>Active Directory</p>
</div>

<div className="skill-card">
<div className="icon"><FaNetworkWired/></div>
<h3>Réseaux</h3>
<p>Architecture réseau</p>
<p>Surveillance réseau</p>
</div>

<div className="skill-card">
<div className="icon"><FaDatabase/></div>
<h3>Bases de données</h3>
<p>MySQL</p>
<p>SQL</p>
</div>

</div>

</section>

);

}