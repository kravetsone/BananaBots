# BananaBots
[![npm](https://img.shields.io/npm/v/bananabots)](https://www.npmjs.com/package/bananabots)[![npm](https://img.shields.io/npm/dt/bananabots.svg)](https://www.npmjs.com/package/bananabots)[![npm](https://img.shields.io/npm/dm/bananabots.svg)](https://www.npmjs.com/package/bananabots)
================
`bananabots` - простой враппер для взаимодействия с API.

## Установка:
### NPM
```
npm i bananabots
```
### Иницилизация:
```js
const BananaBots = require('bananabots')

const bbot = new BananaBots({
  token: '...', // токен пользователя в боте (команда «апи»)
})
```
## Примеры:
### Запросы к апи:
| Параметр | Тип | Обязателен | Описание |
|--|--|--|--|
| methodName | string | Да |Имя метода |
| params | object | Нет | Параметры запроса |

**Пример:**
```js
bbot.call('users.getBalance', {id: 70267059})
.then(async (res) => console.log(res)); //Вывод в консоль результата метода users.getBalance (подробнее на сайте «https://bananabots.site/api»)
```
### Обработка событий:
**Создание Веб-сервера для получения событий:**
```js
bbot.createWebServer(3000); //позволит получать события на порту 3000
```
**Получать событие «new_transfer» можно так:**
```js
bbot.events.on("new_transfer", (data) => console.log(data)); //при событии new_transfer выведет в консоль информацию о переводе
```
| Параметр | Тип | Обязателен | Описание |
|--|--|--|--|
| eventName | string | Да |Имя метода |
| eventFunction | function | Да | Функция которая выполниться при получении события |

## Changelog:
**0.1.5** - Переписан на fastify тем самым ускорил (да fastify) обработку событий убрал ненужные зависимости и переписал документацию.