import styles from './Benefits.module.css';

const benefits = [
  { title: 'Enfoque en resultados', desc: 'No vendemos tecnología, vendemos ROI. Si no ahorra tiempo o genera dinero, no lo hacemos.' },
  { title: 'Soluciones a medida', desc: 'Cada empresa es única. Creamos sistemas que se adaptan a tus flujos, no al revés.' },
  { title: 'IA práctica, no teórica', desc: 'Implementamos herramientas probadas que puedes empezar a usar hoy mismo.' },
  { title: 'Acompañamiento continuo', desc: 'No te dejamos solo con el software. Entrenamos a tu equipo y mantenemos el sistema actualizado.' }
];

export default function Benefits() {
  return (
    <section className={styles.benefitsSection} id="beneficios">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>¿Por qué elegirnos?</h2>
          <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 3rem 0' }}>
            Nuestra diferencia radica en un enfoque de negocio, alejándonos del humo tecnológico.
          </p>
          <div className={styles.grid}>
            {benefits.map((b, i) => (
              <div key={i} className={styles.benefitItem}>
                <div className={styles.checkmark}>✓</div>
                <div>
                  <h4 className={styles.benefitTitle}>{b.title}</h4>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
