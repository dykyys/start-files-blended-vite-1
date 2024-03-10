import style from './Statistics.module.css';
import { IconContext } from 'react-icons';

export const StatisticsItem = ({ icon, total, title }) => {
  return (
    <>
      <IconContext.Provider value={{ size: '2em' }}>{icon}</IconContext.Provider>

      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
