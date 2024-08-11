import style from  "./CryptoHistory.module.css"
export const CryptoHistory = ({ items }) => {
  return(
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
      {items.map(({ id, price, amount, date }, counter) => {
        return (
          <tr key={id} className={style.tr}>
            <td className={style.td}>{counter+1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{date}</td>
          </tr>
        );
      })}
    </tbody>
  </table>)
};

