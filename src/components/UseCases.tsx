import styles from './UseCases.module.css';

const cases = [
  { metric: '+40%', text: 'Tasa de conversión en leads contactados en los primeros 5 minutos mediante agentes conversacionales.' },
  { metric: '80h', text: 'Ahorradas por mes en carga manual de datos entre el CRM, ERP y sistemas contables.' },
  { metric: '24/7', text: 'Soporte al cliente nivel 1 resuelto sin intervención humana, con derivación inteligente a humanos por prioridad.' }
];

export default function UseCases() {
  return (
    <section className={styles.casesSection} id="casos-de-uso">
      <div className={styles.container}>
        <h2 className="section-title">Impacto Directo</h2>
        <p className="section-subtitle">Casos reales de eficiencia impulsada por IA en equipos de operaciones y ventas.</p>
        
        <div className={styles.grid}>
          {cases.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.metric}>{c.metric}</div>
              <p className={styles.text}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
