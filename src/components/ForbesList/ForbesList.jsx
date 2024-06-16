import style from './ForbesList.module.css';
import { ForbesListItem } from '../ForbesListItem/ForbesListItem';

export const ForbesList = ({ forbes }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(forb => (
          <li key={forb.id} className={style.item}>
            <ForbesListItem
              name={forb.name}
              capital={forb.capital}
              avatar={forb.avatar}
              isIncrease={forb.isIncrease}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
