import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, Je Suis Redwane</h1>
        <p className={styles.description}>
          Je suis un étudiant de la Web Academie qui aime 
          faire des scripts PHP
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Me Contacter
        </a>
      </div>
      <img
        src={getImageUrl("hero/photo_cercle.png")}
        alt="Une image de moi"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
