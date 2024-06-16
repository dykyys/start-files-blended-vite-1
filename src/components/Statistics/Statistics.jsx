import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key="FaRegThumbsUp" />,
  <MdPeople key="MdPeople" />,
  <MdOutlineProductionQuantityLimits key="MdOutlineProductionQuantityLimits" />,
  <GiTreeDoor key="GiTreeDoor" />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map((stat, index) => (
          <li key={stat.id} className={style.item}>
            <StatisticsItem
              title={stat.title}
              total={stat.total}
              icon={icons[index]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
