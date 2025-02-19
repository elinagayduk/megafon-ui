# @megafon/ui-core

React UI components library. Change1.

## Getting started

```bash
$ npm install --save @megafon/ui-core
```
```bash
$ yarn add @megafon/ui-core
```

## Development notes

### Build

```bash
$ yarn run build
```

### Interactive demo

```bash
$ yarn run docz:dev
```

The demo will be available at [http://localhost:3000/megafon-ui/](http://localhost:3000/megafon-ui/).

## How gulp modify svg
Для модификации используется плагин gulp-svgmin(на основе svgo), который добавляет уникальный атрибут `id` для тегов и переводит тег `<style>` в инлайн стили.
В svg могут оставаться много тегов `<mask>` и `<clipPath>`, которые не всегда правильно воспринимаются бразуером при использовании спрайта.
Разработчик svgo не нашел хорошего алгоритма для того, чтобы убирать `<mask>` и `<clipPath>`. [Svgo Issue](https://github.com/svg/svgo/issues/680)

Для `<mask>` написан скрипт, который рекурсивно находит все вложенности и заменяет теги.

Стили добавляются программой дизайнеров, в идеале их не должно быть. В спрайте тег `<defs>` кладется в отдельное место, что затрудняет чтение тегов браузером, лучше от них избавляться по возможности. Градиенты всегда находятся в `<defs>`, поэтому иконки с ними могут не работать в спрайте.

`<clipPath>` заменять в коде файла.

Пример, было:
``` xml
<svg id="Ready" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
    <defs>
        <style>
        .cls-1,
        .cls-2 {
            fill: none;
        }

        .cls-1 {
            clip-rule: evenodd;
        }

        .cls-3 {
            clip-path: url(#clip-path);
        }

        .cls-4 {
            clip-path: url(#clip-path-2);
        }
        </style>
        <clipPath id="clip-path">
            <path class="cls-1" d="M28,16a15.78,15.78,0,0,1-1.94,1.73L27.83,20,26.2,21.16l-1.77-2.31a16.29,16.29,0,0,1-2.62,1.24l.94,2.73-1.92.59-.94-2.74a16.66,16.66,0,0,1-2.89.43v2.64H15V21.11a16.7,16.7,0,0,1-3-.45l-.86,2.52-1.92-.59.87-2.52a16.29,16.29,0,0,1-2.54-1.21L5.8,21.16,4.17,20l1.77-2.3A15.78,15.78,0,0,1,4,16l1.51-1.26a14.47,14.47,0,0,0,21,0Zm-4-5.07-1,1.81a13.7,13.7,0,0,0-7-2,13.57,13.57,0,0,0-7,2L8,10.94A15.68,15.68,0,0,1,24,10.94Z" />
        </clipPath>
        <clipPath id="clip-path-2">
            <rect class="cls-2" y="-0.25" width="32" height="32" />
        </clipPath>
    </defs>
    <title>Artboard 21</title>
    <g class="cls-3">
        <g class="cls-4">
            <rect x="-1" y="3.75" width="34" height="25" />
        </g>
    </g>
</svg>
```
Стало:
``` xml
<svg id="Ready" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
    <title>Artboard 21</title>
    <path class="cls-1" d="M28,16a15.78,15.78,0,0,1-1.94,1.73L27.83,20,26.2,21.16l-1.77-2.31a16.29,16.29,0,0,1-2.62,1.24l.94,2.73-1.92.59-.94-2.74a16.66,16.66,0,0,1-2.89.43v2.64H15V21.11a16.7,16.7,0,0,1-3-.45l-.86,2.52-1.92-.59.87-2.52a16.29,16.29,0,0,1-2.54-1.21L5.8,21.16,4.17,20l1.77-2.3A15.78,15.78,0,0,1,4,16l1.51-1.26a14.47,14.47,0,0,0,21,0Zm-4-5.07-1,1.81a13.7,13.7,0,0,0-7-2,13.57,13.57,0,0,0-7,2L8,10.94A15.68,15.68,0,0,1,24,10.94Z" />
</svg>
```
