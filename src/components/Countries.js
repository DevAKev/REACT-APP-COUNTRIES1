import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  // On initialise un state vide qui va contenir les données de l'API
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Le useEffect est un hook qui permet d'effectuer des actions au moment du chargement du composant, il se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="0"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>

      {/* Button reset */}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Réinitialiser la recherche
        </button>
      )}

      <ul>
        {/* On boucle sur le state data pour afficher les données de l'API */}
        {/* // Filtrage des pays par continent */}
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))

          // Tri par population
          .sort((a, b) => b.population - a.population)
          // Limite du nombre de pays affichés
          .slice(0, rangeValue)

          // Affichage des pays
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
