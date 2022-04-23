import React from 'react';
import photo from "../../assets/images/random-travel-generator.png";

function Portfolio(Props) {
    const currentCategory = {
        name: "Random-Travel-Generator",
        description:
          "A application to help traveller to choose next destination.",
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