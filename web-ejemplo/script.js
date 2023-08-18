console.log('Hola Mundo')

let name = 'Sebastian' //Tipo de variable con scope local
const lastName = 'Osorio'  //Tipo de constante
var isDeveloper = false //Tipo de variable con scope general o global

/**
* ! JS es de tipado débil
* ? JS es de tipado dinámico
* * Los datos primitivos no son mutables
* TODO: Los objetos son mutables 
*/

const persona = {
    name: 'Sebastian',
    twitter: '@cbazgamedev',
    age: 33,
    isDev: true,
    links: ['www.cbaz.com', 'www.cbaz.twitch']
}

const field = 'twitter'

console.log(persona.name)
console.log(persona.links[0] + ' ' + persona.links[1])

console.log(persona[field])


const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b
}

function restar (a, b) {
    return a - b
}

console.log(sumar(2, 3))