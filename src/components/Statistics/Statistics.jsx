import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h3 className={style.title}>Main Statistics</h3>}
      <ul className={style.list}>
        {stats.map((stat, i) => {
          return (
            <li className={style.item} key={stat.id}>
              <StatisticsItem
                title={stat.title}
                total={stat.total}
                icon={icons[i]}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
