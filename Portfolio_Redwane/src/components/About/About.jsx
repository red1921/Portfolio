import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>A propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/photo_assis.png")}
          alt="Moi sur mon ordinateur"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Développeur Front-end</h3>
              <p>
                Je suis capable de réaliser la responsive d'un site 
                web ou d'une application
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Developeur Backend</h3>
              <p>
                Je suis experimenté en scripts PHP concernant les boucles et les
                calculs
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
