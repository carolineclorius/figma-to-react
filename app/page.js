import PillModal from "@/components/PillModal";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Komponenter</h1>

      {/* The two CTAs side by side – each PillModal has its own modal */}
      <div className={styles.pills}>
        <PillModal
          type="primary"
          label="Hick's Law"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
        />
        <PillModal
          type="secondary"
          label="Fitts's Law"
          title="Fitts's Law"
          text="Jo større og tættere et mål er, jo hurtigere er det at ramme."
        />
      </div>
    </main>
  );
}
