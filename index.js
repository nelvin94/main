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


const myArray = [1, true, 'dima']
//console.table(myArray)
console.log(myArray)
//console.log(myArray.length)

const myArray2 = [1, true, 'dima']
console.log(myArray2)

console.log(myArray === myArray2)
myArray2.length = 2
//console.log(myArray2.length + 1)
//myArray2[myArray2.length + 1] = 'test3'
myArray2[2] = 'test3'
//console.table(myArray2)
//console.log(myArray2.length)
myArray2.push('test4')
myArray2.push('test5',6)
console.table(myArray2)*/



const object = {
    name: 'Dima',
    age: 18,
    city: 'Irpen'
}

console.log(object.name)
object.name = 'Sashko'
let {name, age} = object
console.log(name)

const massiv = [
    'Dima',
    18,
    'Irpen'
]
console.log(massiv)
const [imya, vozrast] = massiv
console.log(imya)

const fun = ([im2, voz2]) => {
return `${im2} ${voz2} let`
}

console.log(fun(massiv))

const fun2 = ({name, age}) => {
    return `${name} ${age} let`
    }
    
    console.log(fun2(object))