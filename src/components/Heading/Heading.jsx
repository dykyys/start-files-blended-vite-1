import styles from './Heading.module.css';
import clsx from 'clsx';

export const Heading = ({ title, top, bottom }) => {
  return (
    <h2
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
      })}
    >
      {title}
    </h2>
  );
};
