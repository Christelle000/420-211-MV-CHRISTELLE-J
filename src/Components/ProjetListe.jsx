import './ProjetListe.css'

function ProjetListe({projets}) {
   const handleClick = (projet) => {
    if (projet.demo) {
      window.open(projet.demo, "_blank");
    } else if (projet.github) {
      window.open(projet.github, "_blank");
    } else if (projet.file) {
      window.open(projet.file, "_blank");
    } else {
      alert("Aucun lien disponible pour ce projet.");
    }
  };
  return (
       <div className="ContainerProjet">
            {projets.map((projet, index) => (
        <div className="LProg" key={index} onClick={() => handleClick(projets)}>
          <h3>{projet.nom}</h3>
          <img src={projet.image} alt={projet.nom} />

        </div>
      ))}
    </div>

  
  )
}

export default ProjetListe
