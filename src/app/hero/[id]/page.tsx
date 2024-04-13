import Carousel from "@/components/carousel";
import { IHoroData } from "@/interfaces/heroes";

interface Iprops {
  params: {
    id: string;
  };
}

async function getHeroesData(): Promise<{ data: IHoroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}`);

  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }
  return res.json();
}

export default async function Hero({ params: { id } }: Iprops) {
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes.data} activeId={id} />;
}
