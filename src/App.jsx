import "./App.css";
import Bouton from "./composants/Bouton";
import Compteur from "./composants/Compteur";
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0);

  const eventClic = () => {
    setNumClics(numClics + 1);
  };

  const reinitialiserLeCompteur = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="container-principal">
        <Compteur numClics={numClics}/>
        <Bouton 
          texte="Clique" 
          boutonClic={true} 
          eventClic={eventClic} />
        <Bouton
          texte="Réinitialiser"
          boutonClic={false}
          eventClic={reinitialiserLeCompteur}
        />
      </div>
    </div>
  );
}

export default App;
