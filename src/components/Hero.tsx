import styles from './Hero.module.css';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          La forma más rápida de cerrar y confirmar pedidos con <span className={styles.highlight}>IA.</span>
        </h1>
        <p className={styles.subtitle}>
          Creado para equipos de ventas, marketing y operaciones de PYMEs.
        </p>
        <div className={styles.ctaGroup}>
          <Button variant="primary">Empieza gratis</Button>
          <Button variant="outline">Agendar demo</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        {/* Placeholder for the 3D robot or dashboard illustration */}
        <div className={styles.robotPlaceholder}></div>
      </div>
    </section>
  );
}
