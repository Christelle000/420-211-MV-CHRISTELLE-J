import {useState} from 'react'
import './ProjetForm.css'

function ProjetForm({onAdd}) {
   const [formData, setFormData] = useState({
    nom: '',
    description: '',
    image: '',
    github: '',
    demo: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
     ...prev,
     [name]: value
    }))

  }
  const handleSubmit = e => {
    e.preventDefault();
    if (formData.nom && formData.image) {
      onAdd(formData);
      setFormData({
        nom: '',
        description: '',
        image: '',
        github: '',
        demo: ''
      });
    } else {
      alert("Le nom du projet et l’image sont obligatoires.");
       }
        };
  return (
        <div>
         <form className="form-projet" onSubmit={handleSubmit}>
        <h2>Ajouter un projet</h2>

      <input
        type="text"
        name="nom"
        placeholder="Nom du projet"
        value={formData.nom}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description du projet"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="url"
        name="image"
        placeholder="URL de l’image"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <input
        type="url"
        name="github"
        placeholder="Lien GitHub (optionnel)"
        value={formData.github}
        onChange={handleChange}
      />

    <input
        type="url"
        name="demo"
        placeholder="Lien démo (optionnel)"
        value={formData.demo}
        onChange={handleChange}
      />

       <input
        type="file"
        name="file"
        value={formData.file}
        onChange={handleChange}
      />

        <button type="submit">Ajouter</button>
    </form>
      
    </div>
  )
}

export default ProjetForm
