import ForbesListItem from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css';

const ForbesList = ({ list }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {list.map(person => {
          return (
            <li key={person.id} className={style.item}>
              <ForbesListItem
                avatar={person.avatar}
                name={person.name}
                capital={person.capital}
                isIncrease={person.isIncrease}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForbesList;
