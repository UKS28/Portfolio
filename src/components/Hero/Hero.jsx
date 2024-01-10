import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ujjwal </h1>
        <p className={styles.description}>
          I am a Final Year B.Tech Student in Information Technology from NIT Jalandhar.
          Currently , I'm looking for Full Time SDE Role.
        </p>
        <a href="https://drive.google.com/drive/folders/1VWuhTEkmB4QjaWzC-5Ocp6e_60uOdOZy" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
          View CV 
        </a>
      
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
