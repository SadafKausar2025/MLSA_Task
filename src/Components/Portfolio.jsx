/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "laptop images with code on screen coffee notebook and plant on desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Weather Forecast Project",
    description:
      "This is the weather forecast projects which tell about the weather of the city for which we search and finally we get",
    url: "https://sadafkausar2025.github.io/WEATHER/",
  },
  {
    title: "Calculator by HTML , CSS  and JavaScript",
    description:
      "This is the calculator website having all the basic calculating methods which we can do in our daily use.",
    url: "https://sadafkausar2025.github.io/Calculator/",
  },
  {
    title: "The Tic Tac Toe Game",
    description:
      "This is the beautiful Tic Tac Toe Game and any two can play and have a nice feelings",
    url: "https://sadafkausar2025.github.io/Tic-Tac-Toe/",
  },
  {
    title: "Analog Clock",
    description:
      "This is the beautiful working Analog clock which gives right time as per my location",
    url: "https://sadafkausar2025.github.io/Analog_Clock/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
