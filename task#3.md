# Список Forbes

Необхідно доповнити компонент `<ForbesList>`, за допомогою якого ми могли б
відображати інформацію про актуальну інформацію портала **Forbes**. Інформація
про актуальний рейтинг [forbes.json](./src/data/forbes.json).

[![Прев'ю компонента ForbesList](https://i.gyazo.com/d860b2fbd570a9eb800917b116fa0423.png)](https://gyazo.com/d860b2fbd570a9eb800917b116fa0423)

## Опис компонента `<ForbesList>`

Компонент повинен приймати один проп `list` - масив об'єктів.

Компонент повинен створювати наступну структуру.

```jsx
<div className={style.board}>
  <div className={style.header}>
    <h2 className={style.title}>
      <span className={style.titleTop}>Forbes</span>
      <span className={style.titleBottom}>Leader board</span>
    </h2>
  </div>

  <ul className={style.list}>{
   <li className={style.item}>
    /* Довільна кіл-сть ForbesListItem */}
    </li>
    </ul>
</div>
```

## Опис компонента `<ForbesListItem>`

Компонент повинен приймати кілька пропcів:

- `avatar` - аватар мільйонера
- `name` - ім'я мільйонера
- `capital` - статки мільйонера
- `isIncrease` - буль, що сигналізує про стан мільйонера: збільшився або ні.

Залежно від пропа `isIncrease`, повинна змінюватися іконка: при збільшення
статку - `<FcBullish/>` або при зменшенні - `<FcBearish/>`

Компонент повинен бути наступної структури.

```jsx
<>
  <img
    className={style.avatar}
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="Mark Zuckerberg"
  />
  <h3 className={style.title}>Mark Zuckerberg</h3>
  <span className={style.capital}>
    35.7 <BiDollarCircle color="#2196f3" size={22} />
    {/* Тут має бути необхідна іконка зміни статку */}
  </span>
<>
```

## Приклад використання

```js
import forbes from 'data/forbes.json';

<ForbesList list={forbes} />,
```
