import "./Lab.css";

export default function Lab(){

return(

<section className="lab">

<h2>Lab Infrastructure</h2>

<div className="lab-grid">

<div className="lab-card">
<h3>Virtualisation</h3>
<p>Lab Proxmox avec machines virtuelles Windows.</p>
</div>

<div className="lab-card">
<h3>Active Directory</h3>
<p>Configuration domaine et gestion utilisateurs.</p>
</div>

<div className="lab-card">
<h3>Réseau</h3>
<p>Simulation architecture réseau et surveillance.</p>
</div>

</div>

</section>

);

}