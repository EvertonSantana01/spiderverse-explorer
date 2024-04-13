import Image, { StaticImageData } from "next/image";
import ImagespiderMan616 from "@public/aranhas/spider-man-616.png";
import ImageMulherAranha65 from "@public/aranhas/mulher-aranha-65.png";
import ImagemSpide1610 from "@public/aranhas/spider-man-1610.png";
import ImageSp14512 from "@public/aranhas/sp-dr-14512.png";
import ImageSpiderHam8311 from "@public/aranhas/spider-ham-8311.png";
import ImageSpideMan90214 from "@public/aranhas/spider-man-90214.png";
import ImageSpiderMan928 from "@public/aranhas/spider-man-928.png";

import { IHoroData } from "@/interfaces/heroes";

const HeroesImage: Record<string, StaticImageData> = {
  "spider-man-616": ImagespiderMan616,
  "mulher-aranha-65": ImageMulherAranha65,
  "spider-man-1610": ImagemSpide1610,
  "sp-dr-14512": ImageSp14512,
  "spider-ham-8311": ImageSpiderHam8311,
  "spider-man-90214": ImageSpideMan90214,
  "spider-man-928": ImageSpiderMan928,
};

interface Iprops {
  hero: IHoroData;
}

export default function HeroPictures({ hero }: Iprops) {
  return (
    <Image
      src={HeroesImage[hero.id]}
      alt={`${hero.id} (Universo-${hero.universe})`}
      priority
    />
  );
}
