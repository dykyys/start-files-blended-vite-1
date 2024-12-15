import style from './CryptoHistory.module.css';
import { format } from 'date-fns';

const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map((trInf, index) => (
          <tr key={trInf.id} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{trInf.price}</td>
            <td className={style.td}>{trInf.amount}</td>
            <td className={style.td}>{format(trInf.date, 'Pp')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
