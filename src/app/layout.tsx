 import Image from "next/image";
 import "./globais.scss"
import Link from "next/link";

export const metadata = {
  title: "Spader-verse",
  description: "Criando um carrossel parallax com React, Next.js e framer motion",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image 
          src="icones/menu.svg" 
          alt={"Opcoes de menu"} 
          width={36} 
          height={25}/>

          <Link href='/'>
            <Image src="/spider-logo.svg" 
            alt="Spiderman" 
            width={260} 
            height={70}/>
          </Link>

          <Image 
          src="icones/user.svg" 
          alt={"login"} 
          width={36} 
          height={25}/>
        </header>
        {children}
      </body>
    </html>
  );
}
