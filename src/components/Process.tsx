import styles from './Process.module.css';

const steps = [
  { step: '01', title: 'Diagnóstico', desc: 'Analizamos tus procesos actuales y detectamos cuellos de botella.' },
  { step: '02', title: 'Diseño de solución', desc: 'Arquitectamos una automatización a medida con la IA adecuada.' },
  { step: '03', title: 'Implementación', desc: 'Desarrollamos e integramos la solución sin interrumpir tu operación.' },
  { step: '04', title: 'Optimización', desc: 'Monitoreamos y mejoramos los agentes continuamente.' }
];

export default function Process() {
  return (
    <section className={styles.processSection} id="proceso">
      <div className={styles.container}>
        <h2 className="section-title">Nuestro Proceso</h2>
        <p className="section-subtitle">Garantizamos resultados medibles y una integración fluida.</p>
        <div className={styles.timeline}>
          {steps.map((item, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.number}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
