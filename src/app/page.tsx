import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Timothy Miller
      </div>

      <div className={styles.center}>
        Full stack development | GeoInformatics
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub<span>-&gt;</span>
          </h2>
          <p>Code projects</p>
        </a>

        <a
          href="https://www.linkedin.com/in/timothy-m-miller/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linked In<span>-&gt;</span>
          </h2>
          <p>Professional connections</p>
        </a>

        <a
          href="https://dev.to/tangoyankee"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Dev To<span>-&gt;</span>
          </h2>
          <p>Dev Community Blog</p>
        </a>
      </div>
    </main>
  )
}
