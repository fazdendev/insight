# Landing-page Insight

## Описание
Insight это работа номер два в моем портфолио.
Основа кода написана на HTML, CSS и Java Script. Для создания структуры HTML применена методология БЭМ. Для построения конструкций блоков были использованы Grid и Flex layout. Применены относительные единицы шрифтов, которые позволяют плохо видящему пользователю укрупнить шрифт. Каждый элемент имеет анимацию при клике и наведении.

Резиновый адаптив сайта позволяет ему хорошо выглядеть на каждом пикселе, даже на складных смартфонах с очень узким экраном в 280px (Это на 15% меньше, чем ширина экрана у крохотного Iphone 5). Мобильный вид был создан самостоятельно на основе дизайна PC версии. Присутствует меню бургер на смартфонах.

Сайт прошел проверку валидатора W3C. Каждый из параметров сайта в Google Lighthouse находится в зеленой зоне.
Каждое изображение выгружено в оптимальном формате, растровые изображения обернуты в конструкцию Picture, которая при поддержке новейшего формата Webp, выводит изображения в нем, если поддержки нет, выведется обычный WEBP.  Формат WEBP при меньшем весе позволяет показать изображения такого же качества, как и JPG весящий на 20% больше, это сильно ускоряет загрузку сайта.


## Особенности
Интересно реализовано мобильное меню, недопускающее скролл странице если попытаться проскролить в его видимой области, но допускающее скролл вне него.
В мобильной и планшетной версии футера, блоки заменены на сворачивающиеся списки.
Создан анимированный попап о том, что раздел не существует.
Создан кастомный скроллбар на базе Html и Css, при необходимости, этот функционале можно реализовать и с помощью JavaScipt


## Технологии
- HTML
- CSS
- Java Script
- Flex Layout
- Grid Layout
- Сжатие кода
- БЭМ
- Rem и Em для шрифтов
- CSS animations
- Picture WEBP
- Woff2 Fonts
- Попап
- Сворачивающиеся списки в Footer
- Библиотека Smooth Scroll
- Кастомный скроллбар


Ссылка на сайт https://fazdendev.github.io/insight/
