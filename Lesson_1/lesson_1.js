'use strict';
// 1 задание
var Tc = 40;
var Tf = (9 / 5) * Tc + 32;

alert(Tf);
// 2 задание
var admin, name;
name = 'Василий';
admin = name;
alert(admin);

// 3 задание
console.log(1000 + "108"); // 1000108

// 4 задание 
// Тег <script> предназначен для описания скриптов, может содержать ссылку на программу или ее текст на определенном языке.

// При наличии атрибута async браузер при возможности запускает скрипт асинхронно. Это означает, что указанный в атрибуте src файл будет выполняться без ожидания загрузки и отображения веб-страницы. В то же время и страница не ожидает результата выполнения скрипта, а продолжает загружаться как обычно.
// Данный атрибут выключен по умолчанию, что бы он работал нужно использовать тег <script async>...</script>

// defer откладывает выполнение скрипта до тех пор, пока вся страница не будет загружена полностью.
// данный атрибут выключен по умолчанию,что бы он  работал нужно использовать тег <script defer>...</script>