import React from "react";
import '../feuille-de-style/Compteur.css';

function Compteur({ numClics }) {
  return (
		<div className="compteur">
			{numClics}
		</div>
	)
	
}

export default Compteur;
