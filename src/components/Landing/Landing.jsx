import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.landing}>
      {/* Section 1: Наші переваги */}

      <section>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наші переваги</h2>
          <p className={styles.sectionSubtitle}>Чому обирають саме нас</p>
          <hr className={styles.sectionDivider} />
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Висока якість</h3>
              <p className={styles.cardDescription}>
                Ми пропонуємо лише найкращі послуги для наших клієнтів.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Доступні ціни</h3>
              <p className={styles.cardDescription}>
                Прозорі тарифи без прихованих платежів.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Швидке обслуговування</h3>
              <p className={styles.cardDescription}>
                Ми цінуємо ваш час і працюємо оперативно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Часті питання */}

      <section>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Часті питання</h2>
          <p className={styles.sectionSubtitle}>
            Відповіді на найпоширеніші запитання
          </p>
          <hr className={styles.sectionDivider} />
          <div className={styles.questions}>
            <details>
              <summary>Як оформити замовлення?</summary>
              <p>
                Ви можете оформити замовлення через наш сайт або за телефоном.
              </p>
            </details>
            <details>
              <summary>Які способи оплати доступні?</summary>
              <p>Ми приймаємо готівку, картки та онлайн-платежі.</p>
            </details>
            <details>
              <summary>Чи є гарантія на послуги?</summary>
              <p>Так, ми надаємо гарантію на всі наші послуги.</p>
            </details>
            <details>
              <summary>Скільки часу займає обслуговування?</summary>
              <p>Це залежить від типу послуги. Зазвичай від 1 до 3 днів.</p>
            </details>
            <details>
              <summary>Чи працюєте ви у вихідні дні?</summary>
              <p>Так, ми працюємо щодня з 9:00 до 20:00.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Section 3: Зв'язатися з нами */}

      <section>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Зв'язатися з нами</h2>
          <p className={styles.sectionSubtitle}>
            Залиште заявку, і ми вам зателефонуємо
          </p>
          <hr className={styles.sectionDivider} />
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Ім'я</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ваше ім'я"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ваш номер телефону"
                required
              />
            </div>
            <button type="submit" className={styles.btnSubmit}>
              Відправити
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Landing;
