import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ stats }) => {
  console.log(stats);
  return (
    <ul className={style.list}>
      {stats.map(item => {
        let Icon;
        switch (item.title) {
          case 'Happy Customers':
            Icon = FaRegThumbsUp;
            break;
          case 'Registered Members':
            Icon = MdPeople;
            break;
          case 'Available Products':
            Icon = MdOutlineProductionQuantityLimits;
            break;
          case 'Saved Trees':
            Icon = GiTreeDoor;
            break;
          default:
            Icon = FaRegThumbsUp;
        }
        return (
          <li className={style.item} key={item.id}>
            <Icon size={30} />
            <StatisticsItem title={item.title} total={item.total} />
          </li>
        );
      })}
    </ul>
  );
};

export default Statistics;
