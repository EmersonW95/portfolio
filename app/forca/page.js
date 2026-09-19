import Nav from "@/components/Nav";
import ForcaGame from "./ForcaGame";
import styles from "./forca.module.css";

export const metadata = {
  title: "Jogo da Forca — Emerson Dias",
  description: "Projeto pessoal: Jogo da Forca com termos de Ciência da Computação.",
};

export default function ForcaPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <div className={styles.intro}>
          <span className={`mono ${styles.eyebrow}`}>Projeto pessoal — §6</span>
          <h1 className={styles.title}>Jogo da Forca</h1>
          <p>
            Adivinhe o termo de tecnologia antes que o esquema abaixo seja concluído. Escolha
            uma letra por vez — você tem seis chances de errar.
          </p>
        </div>
        <ForcaGame />
      </main>
    </>
  );
}
