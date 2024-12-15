import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};
const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h3 className={style.title}> {title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, ...stats }) => {
          return (
            <li key={id} className={style.item}>
              <StatisticsItem
                icon={icons[id]}
                title={stats.title}
                total={stats.total}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
