namespace Validations {

    export const validateText = ( text: string ):boolean => {
        return ( text.length > 3) ? true : false;
    }


    const validatedate = ( myDate: Date ) => {
        return ( isNaN( myDate.valueOf() ))
            ? false
            : true;
    }


}




console.log( Validations );
