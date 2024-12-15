import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      {/* {title ? <h3 className={style.title}>{title}</h3> : null} */}

      <ul className={style.list}>
        {stats.map((stat, index) => (
          <StatisticsItem
            icon={icons[index]}
            key={stat.id}
            title={stat.title}
            total={stat.total}
          />
        ))}
      </ul>
    </>
  );
};

export default Statistics;
