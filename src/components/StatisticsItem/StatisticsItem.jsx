import style from './Statistics.module.css';

export const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
