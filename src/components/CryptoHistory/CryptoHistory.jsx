import { format } from 'date-fns';
import style from './CryptoHistory.module.css';

const CryptoHistory = ({ items }) => {
  return (
    <>
      <h2>CryptoHistory</h2>
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
          <tr className={style.tr}>
            <td className={style.td}>1</td>
            <td className={style.td}>3190</td>
            <td className={style.td}>0.24843</td>
            <td className={style.td}>{format}</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>2</td>
            <td className={style.td}>3195</td>
            <td className={style.td}>0.088</td>
            <td className={style.td}>{format}</td>
          </tr>
        </tbody>
      </table>
      ```{' '}
    </>
  );
};

export default CryptoHistory;
