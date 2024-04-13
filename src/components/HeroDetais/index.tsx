import { Quicksand } from "next/font/google";
import Image from "next/image";

import styles from "./heroDetais.module.scss";

import { spidermamFont } from "@/fonts";
import { IHoroData } from "@/interfaces/heroes";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface Iprops {
  data: IHoroData;
}

export default function HeroDetais({ data }: Iprops) {
  const { id, name, universe, details } = data;

  return (
    <div className={quicksand}>
      <h1 className={`${spidermamFont} ${styles.title}`}>
        {name} (universe{universe})
      </h1>
      <div className={styles.detais}>
        <h2 className={styles.subtitle}>Informações</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Nome completo</td>
              <td>{details.fullName}</td>
            </tr>
            <tr>
              <td className={styles.label}>Data de Nascimento</td>
              <td>{new Date(details.birthday).toLocaleDateString("pt-BR")}</td>
            </tr>
            <tr>
              <td className={styles.label}>Terra natal</td>
              <td>{details.homeland}</td>
            </tr>
            <tr>
              <td className={styles.label}>Altura</td>
              <td>{details.height.toFixed(2)}m</td>
            </tr>
            <tr>
              <td className={styles.label}>Peso</td>
              <td>{details.weight.toFixed(2)}kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.detais}>
        <h2 className={styles.subtitle}>Primeira aparição</h2>
        <Image src={`/aranhas/${id}-comic-book.png`}
        alt={`Primeira aparição nos quadrinho de ${name} no universo ${universe}`}
        width={80}
        height={122}
        />
      </div>
    </div>
  );
}
