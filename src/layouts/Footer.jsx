// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/


const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <section id="footer_section" className="bg_primary_4 py-5">
      <div className="container-lg mb-sm-0 mb-5">
        <div className="text-center">
          Copyright 2023 - {currentYear} &copy;
          <a
            href="https://github.com/jhayphix"
            target="_blank"
            rel="noreferrer"
            className="text_accent_1 text-decoration-underline"
          >
            {" "}
            Jhayphix{" "}
          </a>
          All Rights Reserved{" "}
        </div>
      </div>
    </section>
  );
};

export default Footer;

