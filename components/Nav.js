"use client";

import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/#formacao", label: "Formação" },
  { href: "/#extracurricular", label: "Extracurricular" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#contato", label: "Contato" },
];

export default function Nav() {
  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.mark}>
          <span className={styles.markCode}>EWD</span>
          <span className={styles.markDot} aria-hidden="true" />
        </Link>

        <nav className={styles.links} aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <Link href="/forca" className={styles.cta}>
          Jogo da Forca
        </Link>
      </div>
    </header>
  );
}
