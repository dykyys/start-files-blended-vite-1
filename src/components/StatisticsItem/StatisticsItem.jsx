import { IconContext } from 'react-icons';
import style from './StatisticsItem.module.css';

export const StatisticsItem = ({ total, title, icon: Icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
        <Icon />
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
