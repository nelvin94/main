/** //Тест результата функции "или", которая ищет первое истинное значение
a = '' || 0 || '44'
//console.log(!!a)



//Тест разделения объекта на свойства, чтобы добавить его значения, в новый объект
let b ={
    color: 'red',
    c:5,
    hk: 'hhh'
}
//console.log(b)

const c= {
    ...b,
    ololo: 7,
    c:15
}
//console.table(c)
//instanceof(b)



//Тест шаблонной строки 
let name = 'Дима'
let city = 'Ирпене'
let result = `Меня зовут ${name}, я живу в ${city}`
//console.log(result)
//console.log(`меня зовут ${name}, я живу в ${city}`)



// Тест стандартной функции со значением по умолчанию
function defaulttest(a, b = 1, c = 3) {
    let g
    ++a
    a++
    g = a * b
    console.log(g)
    return g * c
}
//console.log(defaulttest (1, 2, 4))
//console.log(defaulttest (1, 2))

//Тоже самое, но написано с использованием анонимного функционального выражение
const defaulttest = function(a, b = 1, c = 3) {
    let g
    ++a
    a++
    g = a * b
    console.log(g)
    return g * c
}
console.log(defaulttest (1, 2, 4))
console.log(defaulttest (1, 2))

//Тоже самое, но написано с использованием стрелочной функции
const defaulttest = (a, b = 1, c = 3) => {
    let g
    ++a
    a++
    g = a * b
    console.log(g)
    return g * c
}
console.log(defaulttest (1, 2, 4))
console.log(defaulttest (1, 2))
*/