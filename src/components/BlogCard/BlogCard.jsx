import { getFormattedDateByDistanceToNow } from 'helpers/formatDistanceToNow';

import styles from './BlogCard.module.css';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardPoster} src={poster} alt={title} />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.userBox}>
          <img className={styles.avatar} src={avatar} alt={name} />
          <div>
            <h3 className={styles.userName}>{name}</h3>
            <small className={styles.date}>
              {getFormattedDateByDistanceToNow(postedAt)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
