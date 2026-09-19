import Nav from "@/components/Nav";
import { profile, academic, extracurricular, projects } from "@/lib/data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Formacao />
        <Profissional />
        <Extracurricular />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <span className={`mono ${styles.eyebrow}`}>Ficha técnica — estudante de Ciência da Computação</span>
        <h1 className={styles.heroTitle}>{profile.name}</h1>
        <p className={styles.heroLead}>{profile.goal}</p>
        <div className={styles.heroActions}>
          <a className={styles.primaryBtn} href={`mailto:${profile.email}`}>
            Enviar e-mail
          </a>
          <a className={styles.ghostBtn} href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={styles.ghostBtn} href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <dl className={styles.titleBlock}>
        <Row label="Curso" value={profile.course} />
        <Row label="Instituição" value={profile.institution} />
        <Row label="Período" value={profile.period} />
        <Row label="Local" value={profile.location} />
        <Row label="Status" value="Disponível para estágio" accent />
      </dl>
    </section>
  );
}

function Row({ label, value, accent }) {
  return (
    <div className={styles.tbRow}>
      <dt className={`mono ${styles.tbLabel}`}>{label}</dt>
      <dd className={`${styles.tbValue} ${accent ? styles.tbAccent : ""}`}>{value}</dd>
    </div>
  );
}

function SectionHeading({ code, title }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={`mono ${styles.sectionCode}`}>{code}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <span className={styles.sectionRule} aria-hidden="true" />
    </div>
  );
}

function Formacao() {
  return (
    <section id="formacao" className={styles.section}>
      <SectionHeading code="§1" title="Formação acadêmica" />
      <div className={styles.cardGrid}>
        {academic.map((item) => (
          <article key={item.code} className={styles.card}>
            <div className={styles.cardHead}>
              <span className={`mono ${styles.cardCode}`}>{item.code}</span>
              <span className={`mono ${styles.cardPeriod}`}>{item.period}</span>
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p>{item.description}</p>
            <ul className={styles.tags}>
              {item.stack.map((t) => (
                <li key={t} className={`mono ${styles.tag}`}>
                  {t}
                </li>
              ))}
            </ul>
            <ul className={styles.bullets}>
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Profissional() {
  return (
    <section id="profissional" className={styles.section}>
      <SectionHeading code="§2" title="Experiência profissional" />
      <article className={`${styles.card} ${styles.statusCard}`}>
        <div className={styles.cardHead}>
          <span className={`mono ${styles.cardCode}`}>PRO-01</span>
          <span className={`mono ${styles.statusTag}`}>Em aberto</span>
        </div>
        <h3 className={styles.cardTitle}>Primeira oportunidade em andamento</h3>
        <p>
          Ainda não possuo experiência profissional formal registrada. {profile.goal} A base
          construída em projetos acadêmicos — de sistemas embarcados a back-end e front-end —
          é o que levo para essa próxima etapa.
        </p>
      </article>
    </section>
  );
}

function Extracurricular() {
  return (
    <section id="extracurricular" className={styles.section}>
      <SectionHeading code="§3" title="Atividades extracurriculares" />
      <div className={styles.cardGrid}>
        {extracurricular.map((item) => (
          <article key={item.code} className={styles.card}>
            <div className={styles.cardHead}>
              <span className={`mono ${styles.cardCode}`}>{item.code}</span>
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projetos() {
  return (
    <section id="projetos" className={styles.section}>
      <SectionHeading code="§4" title="Galeria de projetos" />
      <div className={styles.cardGrid}>
        {projects.map((item) => (
          <a
            key={item.code}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} ${styles.projectCard}`}
          >
            <div className={styles.cardHead}>
              <span className={`mono ${styles.cardCode}`}>{item.code}</span>
              <span className={`mono ${styles.linkOut}`}>ver repositório →</span>
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p>{item.description}</p>
            <ul className={styles.tags}>
              {item.stack.map((t) => (
                <li key={t} className={`mono ${styles.tag}`}>
                  {t}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <SectionHeading code="§5" title="Contato" />
      <div className={styles.contactGrid}>
        <a className={styles.contactRow} href={`mailto:${profile.email}`}>
          <span className={`mono ${styles.tbLabel}`}>E-mail</span>
          <span>{profile.email}</span>
        </a>
        <a className={styles.contactRow} href={profile.github} target="_blank" rel="noreferrer">
          <span className={`mono ${styles.tbLabel}`}>GitHub</span>
          <span>{profile.github.replace("https://", "")}</span>
        </a>
        <a className={styles.contactRow} href={profile.linkedin} target="_blank" rel="noreferrer">
          <span className={`mono ${styles.tbLabel}`}>LinkedIn</span>
          <span>{profile.linkedin.replace("https://", "")}</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className="mono">{profile.name}</span>
      <span className="mono">Pernambuco, BR — {new Date().getFullYear()}</span>
    </footer>
  );
}
