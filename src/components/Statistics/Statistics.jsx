import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
const icons = [
  <FaRegThumbsUp key={0} />,
  <MdPeople key={1} />,
  <MdOutlineProductionQuantityLimits key={2} />,
  <GiTreeDoor key={3} />,
];
export const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map((item, index) => {
          return (
            <li className={style.item} key={item.id}>
              <StatisticsItem icon={icons[index]} total={item.total} title={item.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
