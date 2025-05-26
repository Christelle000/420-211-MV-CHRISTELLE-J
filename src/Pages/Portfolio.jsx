
import './Portfolio.css'
import ProjetListe from '../Components/ProjetListe'

function Portfolio({projets}) {
  return (
    <> 
      <div>
          <h1>Portfolio</h1>
      </div>

     <ProjetListe projets= {projets} />

    </>
  )
}

export default Portfolio
