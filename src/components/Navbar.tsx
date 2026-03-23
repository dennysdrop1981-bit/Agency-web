import styles from './Navbar.module.css';
import Button from './ui/Button';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>☽</span>
          Whale AI
        </div>
        <div className={styles.links}>
          <a href="#servicios" className={styles.link}>Servicios</a>
          <a href="#proceso" className={styles.link}>Proceso</a>
          <a href="#beneficios" className={styles.link}>Beneficios</a>
          <a href="#casos-de-uso" className={styles.link}>Casos de uso</a>
        </div>
        <div className={styles.actions}>
          <Button variant="secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Login</Button>
          <Button variant="primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Crear cuenta</Button>
        </div>
      </div>
    </nav>
  );
}
