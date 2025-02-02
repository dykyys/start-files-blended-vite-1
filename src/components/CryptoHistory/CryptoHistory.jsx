import { TimeFormat } from '../helpers/TimeFormat';
import style from './CryptoHistory.module.css';

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
        {items.map((trans, index) => {
          return (
            <tr className={style.tr} key={trans.id}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{trans.price}</td>
              <td className={style.td}>{trans.amount}</td>
              <td className={style.td}>{TimeFormat(trans.date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
