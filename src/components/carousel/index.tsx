"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HeroDetais from "../HeroDetais";
import HeroPictures from "../heroesPicture";

import styles from "./carousel.module.scss";

import { IHoroData } from "@/interfaces/heroes";

enum enPosition {
  FRONT = 0,
  MIDDLE = 1,
  BACK = 2,
}

interface Iprops {
  heroes: IHoroData;
  activeId: string;
}

export default function Carousel({ heroes, activeId }: Iprops) {
  const [visibleItems, setVisibleItems] = useState<IHoroData[] | null>(null);
  const [activeIndex, setActiveIndex]: any = useState<Number>(
    heroes.findIndex((hero) => hero.id === activeId) - 1
  );

  const [startInteractionPosition, setStartInteractionPosition] =
    useState<number>(0);

  const transitionAudio = useMemo(
    () => new Audio("/cancoes/songs_transition.mp3"),
    []
  );

  const voicesAudio: Record<string, HTMLAudioElement> = useMemo(
    () => ({
      "spider-man-616": new Audio("/cancoes/spider-man-616.mp3"),
      "mulher-aranha-65": new Audio("/cancoes/mulher-aranha-65.mp3"),
      "spider-man-1610": new Audio("/cancoes/spider-man-1610.mp3"),
      "sp-dr-14512": new Audio("/cancoes/sp-dr-14512.mp3"),
      "spider-ham-8311": new Audio("/cancoes/spider-ham-8311.mp3"),
      "spider-man-90214": new Audio("/cancoes/spider-man-90214.mp3"),
      "spider-man-928": new Audio("/cancoes/spider-man-928.mp3"),
    }),
    []
  );

  // Vai da um efeito
  useEffect(() => {
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;

    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    ); //... vai desistuturar, heroes vai da um efeito de uma fila
    setVisibleItems(visibleItems);
  }, [heroes, activeIndex]);

  useEffect(() => {
    const htmlEl = document.querySelector("html");

    if (!htmlEl || !visibleItems) {
      return;
    }
    //Definindo o fundo do html, de acordo com o heroi
    const currentHeroiId = visibleItems[enPosition.MIDDLE].id;
    htmlEl.style.backgroundImage = `url("/aranhas/${currentHeroiId}-background.png")`;

    htmlEl.classList.add("hero-page");

    return () => {
      htmlEl.classList.remove("hero-page");
    };
  }, [visibleItems]);

  useEffect(() => {
    if (!visibleItems) {
      return;
    }

    transitionAudio.play();
    const voceAudio = voicesAudio[visibleItems[enPosition.MIDDLE].id];
    if (!voceAudio) {
      return;
    }

    voceAudio.volume = 0.4;
    voceAudio.play();
  }, [visibleItems, transitionAudio, voicesAudio]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setStartInteractionPosition(e.clientX);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (!startInteractionPosition) {
      return null;
    }
    handaleDragTouch(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartInteractionPosition(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startInteractionPosition) {
      return null;
    }
    handleChangeActiveIndex(e.changedTouches[0].clientX);
  };

  const handaleDragTouch = (clientX: number) => {
    const endInteractionPosition = clientX;
    const diffPosition = endInteractionPosition - startInteractionPosition;

    // diffposition > 0 => Direta para esquerda
    // diffPosition < 0 => Esquerda para direta
    const newPosition = diffPosition > 0 ? -1 : 1;
    handleChangeActiveIndex(newPosition);
  };

  // Altera heroi ativo no carrossel
  // +1 rotaciona sentido horario
  // -1 rotaciona sentido anti-horario
  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if (!visibleItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, position) => (
              <motion.div
                key={item.id}
                className={styles.hero}
                initial={{ x: -1500, scale: 0.75 }}
                animate={{ x: 0, ...getItemStyles(position) }}
                exit={{ x: 0, opacity: 0, scale: 1, left: "-20%" }}
                transition={{ duration: 0.8 }}
              >
                <HeroPictures hero={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className={styles.detais}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <HeroDetais data={visibleItems[enPosition.MIDDLE]} />
      </motion.div>
    </div>
  );
}

const getItemStyles = (position: enPosition) => {
  if (position === enPosition.FRONT) {
    return {
      zIndex: 3,
      filter: "blur(10px)",
      scale: 1.2,
    };
  }
  if (position === enPosition.MIDDLE) {
    return {
      zIndex: 2,
      left: 300,
      scale: 0.8,
      top: "-10%",
    };
  }
  return {
    zIndex: 1,
    filter: "blur(10px)",
    left: 160,
    top: "-20%",
    scale: 0.6,
    opacity: 0.8,
  };
};
