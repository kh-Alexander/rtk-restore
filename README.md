`start`
npm start

`запуск сервера`
json-server --watch db.json --port 5000

transform json-to-typescript
https://transform.tools/json-to-typescript

Автоподсказка Ctrl + Пробел

## с 33 мин Запросы на получение данных (query)

youtube
Продвинутый Redux. Redux Toolkit, RTK query, TypeScript

$ npx create-react-app . --template redux-typescript
$ npm install axios
$ npm install --save react-router-dom
$ npm install -g json-server

$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p

После установки tailwindcss необходимо открыть документацию и
настроить файлы tailwind.config.js, index.css, postcss.config.js

https://github.com/typicode/json-server
$ npm install -g json-server - необязательно устанавливать

Запуск сервера на выбранном порту допустим на 5000
json-server --watch db.json --port 5000

https://tailwindcss.com/docs/object-fit установка размера картинки

## Redux без TOOLKIT

return {
...state,
object: {
...state.object,
field: action.payload,
},
};

## Redux с TOOLKIT

state.object.field = action.payload;

## Настройка css modul

- создаем файл src/Globals.d.ts
  в нем записываем declare module "\*.module.css";
- Устанавливаем в tsconfig.json
  "plugins": [{ "name": "typescript-plugin-css-modules" }]
  - Выбираем любой файл .ts затем в нижней части VS Code в {}TypeScript наводим мышку на {} появится версия TypeScript и рядом Select version, кликаем на нее, затем кликаем на WorkSpase version

## Хорошее видео Непомнящий

youtube
Типизация стилей

////////
Redux Toolkit позволяет нам писать "мутирующую" логику
в редукторах. На самом деле это не изменяет состояние,
потому что оно использует библиотеку `Immer`,
которая обнаруживает изменения в "черновом состоянии"
и создает совершенно новое неизменяемое состояние на
основе этих изменений

Action creators генерируются для каждой функции редюсера

Приведенная ниже функция называется селектором.
`const selectCount = (state) => state.counter.value`
Она позволяет нам выбрать значение из состояния.
Селекторы также могут быть определены встроенно там,
где они используются, а не в файле среза counterSlice .
Например: `useSelector((state) => state.counter.value)`в counter.js

пример
typescript-plugin-css-modules - CodeSandbox
typescript-plugin-css-modules - npm
