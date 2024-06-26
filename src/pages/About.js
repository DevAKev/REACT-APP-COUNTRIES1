import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        Projet pour apprendre les bases de <strong>Node.js</strong> avec la
        bibliotèque <strong>REACT</strong>.
      </p>
      <br />
      <p>
        Cette application est conçu pour afficher la liste des drapeaux des Pays
        officiels du monde ainsi que le nom des capitales et le nombre
        d'habitants. Un système de filtre est mis en plaçe afin de permettre la
        sélection du nombre de drapeaux à afficher et un tri donne la
        possibilité de trier ces 250 drapeaux par continent. Ils sont affichés
        par population décroissante, du plus peuplé au moins peuplé.
      </p>
      <br />
      <Footer />
    </>
  );
};

export default About;
