import styles from './FooterCTA.module.css';
import Button from './ui/Button';

export default function FooterCTA() {
  return (
    <footer className={styles.footerCTA}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>¿Listo para multiplicar la eficiencia de tu equipo?</h2>
          <p className={styles.subtitle}>
            Agenda una llamada de diagnóstico de 30 minutos sin compromiso y descubre cómo podemos implementar IA en tu empresa hoy mismo.
          </p>
          <div className={styles.actions}>
            <Button variant="primary">Agendar llamada</Button>
            <Button variant="outline">Consultar precios</Button>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Agencia de IA. Construido para el éxito empresarial.</p>
        </div>
      </div>
    </footer>
  );
}
