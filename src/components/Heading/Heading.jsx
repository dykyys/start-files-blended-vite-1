import styles from './Heading.module.css';
import clsx from 'clsx';

const Heading = ({ title, top, bottom, tag: Tag = 'h2' }) => {
  return (
    <Tag
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
      })}
    >
      {title}
    </Tag>
  );
};

export default Heading;
