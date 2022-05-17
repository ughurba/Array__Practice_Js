





// Создайте массив styles с элементами «Джаз» и «Блюз».
let styles = ['Джаз', 'Блюз','Arif','orxan'];

// Добавьте «Рок-н-ролл» в конец.
styles.push('Rok-n-roll');
console.log(styles)

// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);

// Удалите первый элемент массива и покажите его.
let removeElmArray = styles.shift();
console.log(removeElmArray);


// Вставьте Рэп и Регги в начало массива.
styles.unshift('Rep', 'Reqqi')
console.log(styles);