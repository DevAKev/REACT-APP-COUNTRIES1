import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"flag" + country.translations.fra.common}
      />
      <div className="infos">
        {/* On affiche le nom du pays */}
        <h2>{country.translations.fra.common}</h2>{" "}
        {/* On affiche la capitale du pays */}
        <h4>{country.capital}</h4>
        {/* On affiche le nombre d'habitants du pays et la séparation du nombre par millier */}
        <p>Pop. {country.population.toLocaleString()}</p>{" "}
      </div>
    </li>
  );
};

export default Card;
