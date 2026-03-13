import { FaNetworkWired, FaDatabase, FaWindows, FaCode, FaTerminal } from "react-icons/fa";
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

<p>• Support utilisateurs et assistance à distance</p>
<p>• Diagnostic et résolution d’incidents matériels et logiciels</p>
<p>• Gestion et suivi du parc informatique</p>
<p>• Gestion des tickets et suivi des incidents</p>
</div>

<div className="skill-card">
<div className="icon"><FaWindows/></div>
<h3>Systèmes</h3>

<p>• Gestion de domaine Active Directory</p>
<p>• Administration Windows / Linux</p>
<p>• Gestion des utilisateurs et permissions</p>
<p>• Virtualisation d’infrastructure</p>
</div>

<div className="skill-card">
<div className="icon"><FaNetworkWired/></div>
<h3>Réseaux</h3>

<p>• Configuration et maintenance réseau</p>
<p>• Supervision et diagnostic réseau</p>
<p>• Configuration d’équipements réseau (routeurs, switch)</p>
<p>• Architecture et administration réseau</p>

</div>

<div className="skill-card">
<div className="icon"><FaDatabase/></div>
<h3>Bases de données</h3>

<p>• MySQL / MariaDB</p>
<p>• PhpMyAdmin</p>
<p>• Gestion et requêtes SQL</p>
</div>

<div className="skill-card">
<div className="icon"><FaTerminal/></div>
<h3>Automatisation</h3>

<p>• Scripts Bash</p>
<p>• Automatisation Linux</p>
<p>• Diagnostic système</p>
</div>


<div className="skill-card">
  <div className="icon"><FaCode/></div>

  <h3>Développement</h3>

  <p>• PHP 7</p>
  <p>• Laravel</p>
  <p>• React</p>
  <p>• HTML5 / CSS3</p>
</div>


</div>

</section>

);

}