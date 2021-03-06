[Link to task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/fancy-weather.md)

https://tensegrity666-fancy-weather.netlify.app/

[Screenshot](https://yadi.sk/d/OXWXREU2-Yqpwg)

Deadline: 31.05.2020 23:59
_____________________________________________________________________________
### Ваша оценка - 100 баллов 

Отзыв по пунктам ТЗ:

Не выполненные/не засчитанные пункты:

1) приложение корректно отображается для любого выбранного языка, единиц измерения температуры, указанного в поиске населённого пункта 

2) поиск работает как при нажатии на клавишу Enter в поле поиска, так и при клике на кнопку Поиск 

3) поиск корректно работает для разных населённых пунктов - больших и маленьких, столиц и посёлков 

4) при вводе в поле поиска некорректных запросов приложение не ломается, пользователю выводится уведомление об ошибке 

5) дата и время указываются для того часового пояса, в котором находится указанный в поле поиска населённый пункт 

6) если у координаты есть знак минус, он тоже выводится, или возле координаты выводится буква, обозначающая широту (северная (N), южная (S)) и долготу (восточная (E), западная (W)) 

7) есть индикация активного и неактивного состояния микрофона, активное и неактивное состояние переключаются по клику 

8) после того, как название населённого пункта произнесено, поиск срабатывает автоматически, без необходимости кликать на кнопку 

9) поиск ведётся на языке отображения страницы, если срабатывает поиск и на другом языке тоже, это не является ошибкой 

10) при клике по кнопке проигрывания звука есть возможность прослушать звуковое уведомление о прогнозе погоды 

11) голосовое уведомление о прогнозе погоды можно запустить произнеся кодовую фразу. Также голосом можно регулировать громкость уведомления. Обратите внимание, голосовое управление работает только при включенном микрофоне 

12) переводится весь текст страницы. Не является ошибкой отсутствие перевода карты 

13) перевод на белорусский язык названий дней недели и месяцев 

14) при перезагрузке страницы сохраняется выбранный пользователем язык 

15) продуман и реализован не предусмотренный заданием дополнительный функционал 

Частично выполненные пункты:

1) одновременное обновление всех элементов страницы при вводе нового населенного пункта после получения успешного ответа по каждому из запросов (название по локации приходит быстро, а погода, иконки ее и т.п. - медленно). В случае возникновения ошибки по одному из запросов данные не обновляются 

2) фоновое изображение генерируется с учётом поры года и времени суток указанного в поле поиска населённого пункта (по желанию можно добавлять и другие параметры поиска). Если возникла ошибка в ходе получения картинки, использовать любое стандартное фоновое изображение. Так как API для картинок не всегда возвращает правильный результат, данные о параметрах запроса фонового изображения для удобства в ходе проверки ментором или в процессе кросс чека выведите в консоль 

3) при смене шкалы отображения температур происходит пересчёт температур в соответствии с выбранной шкалой и меняется отображение активной кнопки, позволяющей определить, какая шкала сейчас активна. При перезагрузке страницы сохраняется выбранная пользователем шкала отображения температур 

4) оригинальный интересный качественный дизайн приложения, иконки погоды и кнопки анимированы, для анимации используются ключевые кадры или svg-анимация 
_________________________________________________________________________________________________________
### Выполненные пункты:

1) минимальная ширина страницы, при которой она отображается корректно – 320 рх. Все указанные в задании элементы присутствуют как на десктопной, так и на мобильной версии 

2) внешний вид приложения внешне соответствует макету или является его улучшенной версией 

3) данные о погоде и местоположении пользователя 

4) дата в указанном в описании задания формате, часы, обновляющие время каждую секунду 

5) В блоке Прогноз погоды на три дня корректно отображаются данные, относящиеся к текущему местоположению пользователя 

6) карта с маской (форма карты отличная от прямоугольной) и маркером населённого пункта 

7) координаты в градусах и минутах 

8) плавная смена фонового изображения, изображение сначала загружается и только потом меняется, у изображения есть полупрозрачный оверлей или используется другой способ, обеспечивающий чёткость и контрастность надписей 
