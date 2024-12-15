import styles from './LandingSection.module.css';

const LandingSection = ({ title, subtitle, children }) => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <hr className={styles.divider} />
        {children}
      </div>
    </section>
  );
};

export default LandingSection;
