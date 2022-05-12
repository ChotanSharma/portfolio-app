import React from 'react';
import photo from "../../assets/images/A picture of my project.png";

function Portfolio(Props) {
    const currentCategory = {
        name: "Professional-ReadMe",
        description:
          "An application to help the developers to prepare a quick README.md for their github repository.",
      };
      return (
        <section id="portfolio">
          <h1>{currentCategory.name}</h1>
          <p>{currentCategory.name}</p>
          <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
        </section>
      );
}
export default Portfolio;