import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({header, list}) => {
 
  return (
    <>
      {header && <h3 className={style.title}>{header}</h3>}

      
{/* <ul className={style.list}>
 { 
    <li className={style.item}>
      <StatisticsItem/>
    </li>
} 
      </ul> */}
    </>
   
  )
   
};

