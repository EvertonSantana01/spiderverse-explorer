"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import HeroPictures from "../heroesPicture";

import styles from "./heroesList.module.scss";

import { spidermamFont } from "@/fonts";
import { IHoroData } from "@/interfaces/heroes";

interface Iprops {
  heroes: IHoroData[];
}

export default function HeroesList({ heroes }: Iprops) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if(!isMobile){
    return(
      <>
        <motion.h1
          className={`${spidermamFont.className} ${styles.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          Personagens
        </motion.h1>
        <motion.section
          className={styles.heroes}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          {heroes.map((hero) => (
            <motion.div
              key={hero.id}
              className={`${styles.imageContainer} ${styles[hero.id]}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/hero/${hero.id}`}>
                <HeroPictures hero={hero} />
              </Link>
            </motion.div>
          ))}
        </motion.section>
      </>  
  )}
  return (
    <>
        <motion.h1
          className={`${spidermamFont.className} ${styles.title2}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          Personagens
        </motion.h1>
        <motion.section
          className={styles.heroes2}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          {heroes.map((hero) => (
            <motion.div
              key={hero.id}
              className={`${styles.imageContainer} ${styles[hero.id]}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/hero/${hero.id}`}>
                <HeroPictures hero={hero} />
              </Link>
            </motion.div>
          ))}
        </motion.section>
      </> 
  );
}
