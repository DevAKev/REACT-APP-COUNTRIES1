import React from "react";

const Card = ({ country, exchangeRates }) => {
  // Extraction des propriétés nécessaires de l'objet country
  const { translations, capital, population, flags, currencies } = country;

  return (
    <li className="card">
      {/* Image du drapeau du pays */}
      <img src={flags.svg} alt={"flag" + translations.fra.common} />

      {/* Div contenant les informations sur le pays */}
      <div className="infos">
        {/* Nom du pays */}
        <h2>{translations.fra.common}</h2>

        {/* Capitale du pays */}
        <h4>{capital}</h4>

        {/* Population du pays avec formatage pour la lisibilité */}
        <p>Pop. {population.toLocaleString()}</p>

        {/* Accéder aux informations de devise si currencies est défini */}
        {currencies && Object.keys(currencies).length > 0 && (
          <div>
            {/* Affichage de la devise du pays */}
            <p>
              Devise : {currencies[Object.keys(currencies)[0]].name}
              {/* Utiliser les taux de change pour afficher la conversion de 1€ dans la devise du pays */}
              {exchangeRates && (
                <div>
                  <h4>Taux de change :</h4>
                  <ul>
                    {Object.keys(exchangeRates).map((currencyCode) => (
                      <li className="exchangeRates" key={currencyCode}>
                        {/* Affichage du taux de change pour chaque devise */}
                        {currencies && currencies[currencyCode]
                          ? `${currencies[currencyCode].name}: ${
                              exchangeRates[currencies[currencyCode].code]
                            }`
                          : `${currencyCode}: ${exchangeRates[currencyCode]}`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </p>
          </div>
        )}
      </div>
    </li>
  );
};

export default Card;
