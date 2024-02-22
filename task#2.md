# Секція статистики

Доповни компонент `<Statistics>`, який би показував статистику з переданих
пропсів - основну статистику інтернет-магазину стосовно зареєстрованих
користувачів, відгуків тощо . Дані про статистику лежать у файлі
[stats.json](./src/data/stats.json).

[![Прев'ю компонента Statistics](https://i.gyazo.com/a75d617620bdb0805e19d5a394699dea.png)](https://gyazo.com/a75d617620bdb0805e19d5a394699dea)

## Опис компонента

Компонент повинен приймати два пропи `title` і `stats`, в яких вказується
заголовок та об'єкт статистики.

- `title` - не обов'язковий, і якщо він не переданий, не повинна рендеритись
  розмітка заголовка `<h3>`.
- `stats` - масив об'єктів, що містять інформацію про елемент статистики. Може
  мати довільну кількість елементів.

Компонент повинен створювати наступну структуру.

```jsx
<h2 className={style.title}>Main Statistics</h2>

<ul className={style.list}>
  <li className={styled.item}>
    {/* Тут повинна бути іконка */}
    <span className={styled.counter}>2147</span>
    <p className={styled.text}>Happy Customers</p>
  </li>
</ul>
```

> Для виконання завдання з іконкою потрібно продумати логіку, як динамічно
> відмалювати з бібліотеки
> [**react-icons**](https://github.com/react-icons/react-icons) іконки та
> змінити дефолтний розмір

## Приклад використання

```js
import stats from 'data/stats.json';

<Statistics title="Main Statistics" stats={stats} />;
<Statistics stats={data} />;
```
