import { IconContext } from 'react-icons';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
        <Icon />
      </IconContext.Provider>

      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title} </p>
    </>
  );
};

export default StatisticsItem;
