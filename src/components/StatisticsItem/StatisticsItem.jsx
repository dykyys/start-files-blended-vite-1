import statsData from '../../data/stats.json';
import styleStList from './StatisticsItem.module.css';

const StatisticsItem = ({ id, title, total, icon: Icon }) => {
  return (
    <>
      <li className={styleStList.item} key={id}>
        <Icon size={24} />
        <span className={styleStList.counter}>{total}</span>
        <p className={statsData.text}>{title}</p>
      </li>
    </>
  );
};

export default StatisticsItem;
