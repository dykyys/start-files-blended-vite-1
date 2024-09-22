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
export const Statistics = ({ header, list }) => {
  return (
    <>
      {header && <h3 className={style.title}>{header}</h3>}

      <ul className={style.list}>
        {list.map((item, index) => (
          <li key={item.id} className={style.item}>
            <StatisticsItem
              total={item.total}
              title={item.title}
              icon={icons[index]}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
