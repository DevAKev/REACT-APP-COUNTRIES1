const DesktopFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="desktop-footer">
      <div className="desktop-btn-container">
        <button className="desktop-search-button">
          <a
            className="desktop-contact-link"
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

      <div className="desktop-copyright-container">
        <h2 className="desktop-copyright">
          Designed & Built From Scratch With ❤️ -
          <a href="https://devakev.github.io/aiche-kevyn"> By DevAKev</a> ©
          {year}
        </h2>
      </div>
    </footer>
  );
};

export default DesktopFooter;
