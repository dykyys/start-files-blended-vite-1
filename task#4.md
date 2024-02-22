# Історія транзакцій

Необхідно доповнити компонент історії транзакцій в особистому кабінеті
крипто-гаманця.

[![Прев'ю компонента CryptoHistory](https://i.gyazo.com/c40db818fdf62f749f97ab24f1946928.png)](https://gyazo.com/c40db818fdf62f749f97ab24f1946928)

Дані для списку доступні у форматі JSON у файлі
[transactions.json](./src/data/transactions.json). Це масив об'єктів, кожен
об'єкт описує одну транзакцію з наступними властивостями:

- `id` — унікальний ідентифікатор транзакції
- `price` — залишок на рахунку
- `amount` - сума транзакції
- `date` - дата транзакції

## Опис компонента `<CryptoHistory>`

Необхідно доповнити компонент `<CryptoHistory>`, який приймає один проп
`items` - масив об'єктів транзакцій з `transactions.json`. Компонент створює
розмітку таблиці. Кожна транзакція - це рядок таблиці. У прикладі наведена
структура двох транзакцій.

```jsx
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
      <td className={style.td}>02/01/2022, 1:14 PM</td>
    </tr>
    <tr className={style.tr}>
      <td className={style.td}>2</td>
      <td className={style.td}>3195</td>
      <td className={style.td}>0.088</td>
      <td className={style.td}>05/09/2022, 2:24 PM</td>
    </tr>
  </tbody>
</table>
```

> Для форматування дати використовуйте метод
> [format](https://date-fns.org/v2.28.0/docs/format) бібліотеки **date-fns**

## Приклад використання

```js
import transactions from 'data/transactions.json';

<CryptoHistory items={transactions} />;
```
