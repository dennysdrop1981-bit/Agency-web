import styles from './Services.module.css';

const services = [
  {
    title: 'Automatizaciones con IA',
    description: 'Eliminamos el trabajo manual repetitivo conectando tus herramientas actuales con procesos inteligentes que ahorran cientos de horas.',
    icon: '⚡'
  },
  {
    title: 'Agentes de IA Personalizados',
    description: 'Desarrollamos asistentes virtuales avanzados entrenados con los datos de tu empresa para ventas, soporte y operaciones.',
    icon: '🤖'
  },
  {
    title: 'Consultoría Estratégica en IA',
    description: 'Analizamos tu modelo de negocio e identificamos las áreas de mayor impacto donde la IA puede generar un retorno de inversión inmediato.',
    icon: '📈'
  },
  {
    title: 'Integraciones de Sistemas',
    description: 'Conectamos CRMs, ERPs y flujos de trabajo con modelos de lenguaje modernos para unificar la inteligencia en tu empresa.',
    icon: '🔌'
  }
];

export default function Services() {
  return (
    <section className={styles.servicesSection} id="servicios">
      <div className={styles.container}>
        <h2 className="section-title">Servicios Especializados</h2>
        <p className="section-subtitle">
          Soluciones de inteligencia artificial diseñadas específicamente para escalar tu negocio y reducir costos operativos.
        </p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
