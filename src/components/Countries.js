import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  // On initialise un state vide qui va contenir les données de l'API
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // New State for search bar
  const [exchangeRates, setExchangeRates] = useState(null); // State for exchange rates
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Le useEffect est un hook qui permet d'effectuer des actions au moment du chargement du composant, il se joue lorsque le composant est monté
  useEffect(() => {
    // On effectue une requête HTTP GET avec Axios
    // Pour récupérer les données de conversion de devises avec l'API Open Exchange Rates
    axios
      .get("https://open.er-api.com/v6/latest/EUR")
      // promise qui se joue si la requête est un succès
      .then((exchangeResponse) => {
        setExchangeRates(exchangeResponse.data.rates);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des taux de change :",
          error
        );
      });
    // console.log(exchangeRates);

    // Pour récupérer les données des pays
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
      {/* Champ de recherche par pays */}
      <input
        id="search-bar"
        type="text"
        placeholder="Rechercher un pays..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
          .filter(
            (country) =>
              country.continents[0].includes(selectedRadio) &&
              country.name.common
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )

          // Tri par population
          .sort((a, b) => b.population - a.population)
          // Limite du nombre de pays affichés
          .slice(0, rangeValue)

          // Affichage des pays
          .map((country, index) => (
            // On passe les données de l'API en props du composant Card qui affichera les données des pays et les devises
            <Card key={index} country={country} exchangeRates={exchangeRates} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;

// Comment savoir quelles sont les informations que je peux récupérer sur les pays avec Axios ?
