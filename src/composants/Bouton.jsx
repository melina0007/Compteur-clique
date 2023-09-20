import React from "react";
import '../feuille-de-style/Bouton.css'

function Bouton({ texte, boutonClic, eventClic }) {
  return (
    <button
      className={boutonClic ? "bouton-clic" : "bouton-reinitialiser"}
      onClick={eventClic}
    >
      {texte}
    </button>
  );
}

export default Bouton;
