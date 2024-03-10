import { getFormattedDatePp } from 'helpers/formatDataPp';
import style from './CryptoHistory.module.css';

export const CryptoHistory = ({ items }) => {
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
      {items.map(({ id, price, amount, date }, idx) => {
        return (
          <tbody key={id}>
            <tr className={style.tr}>
              <td className={style.td}>{idx + 1}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{getFormattedDatePp(date)}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
