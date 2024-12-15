import style from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';

const ForbesList = ({ forbes }) => {
  //

  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>
      <ul className={style.list}>
        {forbes.map(forbesItem => {
          return (
            <li key={forbesItem.id} className={style.item}>
              <ForbesListItem
                avatar={forbesItem.avatar}
                name={forbesItem.name}
                capital={forbesItem.capital}
                isIncrease={forbesItem.isIncrease}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForbesList;
