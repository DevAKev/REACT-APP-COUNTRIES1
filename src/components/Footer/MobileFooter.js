const MobileFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mobile-footer">
      <div className="mobile-btn-container">
        <button className="mobile-search-button">
          <a
            className="mobile-contact-link"
            href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
              "Je cherche un développeur"
            )}&body=${encodeURIComponent(
              "Bonjour Kévyn, j'ai consulté votre portfolio et j'aimerais m'entretenir avec vous. Quelles sont vos disponibilités pour vous partager les détails sur le projet ?"
            )}`}
          >
            Je cherche un développeur
          </a>
        </button>
      </div>

      <div className="mobile-copyright-container">
        <h2 className="mobile-copyright">
          Designed & Built From Scratch With ❤️ -
          <a href="https://devakev.github.io/aiche-kevyn"> By DevAKev</a> ©
          {year}
        </h2>
      </div>
    </footer>
  );
};

export default MobileFooter;
