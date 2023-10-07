(() => {

  class Avenger {
		constructor(
			public name: string,
			public realName: string,
		){
			// console.log('Contructor llamado');
			
		}


		protected getFullName() {
			return `${ this.name } ${ this.realName }`;
		}

		


	}

	class Xmen extends Avenger {

		constructor(
			name: string,
			realName: string,
			public isMutant: boolean,
		) {
			super(name, realName)

			// console.log('Contructor xmen llamado');
			
		}



		get fullName() {
			return `${ this.name } - ${ this.realName } `
		}

		set fullName( name:string ) {

			if (name.length <= 3) throw new Error('Nombre no permitido')
			
			this.name = name;
		}


		getFullNAmeDesdeXmen() {
			// console.log( super.getFullName() );
			
		}

	}





	const wolverine = new Xmen('Wolverine', 'Logan', true)
	// console.log(wolverine.fullName);

	wolverine.fullName = 'Fernando'

	// console.log(wolverine.fullName);
	




	// // console.log(wolverine);
	// wolverine.getFullNAmeDesdeXmen();


	// const nuevoAvenger = new Avenger('Hola', 'Mundo')


	
	





})()