(() => {

  const error = (messsaje: string):(never | number) => {
		

		if ( false ) {
			throw new Error(messsaje)
		}


		return 1;


	}

	// No tiene un punto alcanzable para finalizar la funcion 

	error('Auxilio')

})()