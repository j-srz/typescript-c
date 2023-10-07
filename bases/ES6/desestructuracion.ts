(() => {


    type Avengers = {
        nick:string
        ironman:string
        vision:string
        activo:boolean
        poder:number
    }

    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500,
    }


    const printAvenger = ({ ironman, ...resto }:Avengers) => {


        console.log( resto );
        
    }



    // printAvenger( avengers );


    const avengersArr:[string, boolean, number] = ['Cap. America', true, 150.15];

    const [capitan, ironman, ] = avengersArr;


    // console.log({ironman, capitan});
    




})()