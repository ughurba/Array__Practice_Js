// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

let styles = ['Джаз', 'Блюз','Arif','orxan','aqil'];

styles.push('Rok-n-roll');
console.log(styles)

for(i = 0; i<styles.length ; i++){

    let arrayLength = styles.length / 2
    let centerSizeArray = Math.trunc(arrayLength);

    console.log(centerSizeArray)

    styles[centerSizeArray] = 'klassika'
     
    console.log(styles)
  
}