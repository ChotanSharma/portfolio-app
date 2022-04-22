import React from 'react';
//import '../../App.css';
import './Nav.css'

function Nav () {
    const categories = [
        {
          name: "About",
          description:
            "A few words about me",
        },
        { name: "Portfolio", description: " A few examples of my works." },
        { name: "Contact", description: "A way to contact me" },
        {
          name: "Resume",
          description: "The details of my professional life",
        },
      ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
    <header>
        <h2>Chotan Sharma</h2>
        <nav>
            <ul className="flex-row">
            {categories.map((category) => (
                <li
                className="mx-1"
                key={category.name}
                > <a href={'#' + category.name.toLowerCase()}>
                <span onClick={() => categorySelected(category.name)}>
                    {category.name}
                </span>
                </a>
                </li>
            ))}
            </ul>
        </nav>
</header>
  );
}

export default Nav;
