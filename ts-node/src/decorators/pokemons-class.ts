
function printToConsole(constructor: Function) {
    console.log(constructor);
}


const printToConsoleConditional = ( print: boolean = false):Function => {
    if ( print ) {
        return printToConsole;
    } else {
        return () => {}
    }
    
}

const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function CheckValidPokemonId() {

    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        // console.log({target, propertyKey, descriptor});  

        // descriptor.value = () => console.log('AAAAAAAAAAhhhhhh');

        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            if ( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod(id)
            }
        }

        
    }


}


function readOnly( isWritable: boolean = true): Function {
    return function( target: any, propertyKey: string ) {
        
        const descriptor: PropertyDescriptor = {
            get(  ) {
                console.log(this);
                
                return 'Jesus'
            }, set( this, value ) {
                // console.log(this, value);

                Object.defineProperty( this, propertyKey, {
                    value,
                    writable: !isWritable,
                    enumerable: false,
                } )

            }
        }

        return descriptor;
    }
}






@bloquearPrototipo
@printToConsoleConditional(  )
export class Pokemon {

    @readOnly()
    private publicApi: string = 'https://pokeapi.co';
    
    constructor(public name: string = '') {}



    @CheckValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log(`Pokemon guardado en DB ${ id }`);
        
    }



}