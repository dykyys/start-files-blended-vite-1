import { IconContext } from 'react-icons';
import style from './StatisticsItem.module.css';

export const StatisticsItem = ({ stat: { title, total }, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'blue', size: 30 }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
