import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villian, Hero } from "../interfaces";


// console.log(genericFunctionArrow(3.1416).toFixed(1) );
// console.log(genericFunctionArrow( new Date() ).getDay() );
// console.log(genericFunctionArrow( 'Hola mundo' ).codePointAt(1) );


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}



console.log( genericFunctionArrow<Villian>(deadpool).dangerLevel);
