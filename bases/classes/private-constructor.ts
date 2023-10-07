(() => {

	class Apocalipsis {

		static instance: Apocalipsis;

		private constructor(
			public name: string
		) {}

		static callApocalipsis(): Apocalipsis {
			if ( !Apocalipsis.instance ) {
				Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el unico')
			}


			return Apocalipsis.instance;
		}

		changeName( name:string ):void {
			this.name = name
		}


	}


	const apocalipsis = Apocalipsis.callApocalipsis();
	const apocalipsis2 = Apocalipsis.callApocalipsis();
	const apocalipsis3 = Apocalipsis.callApocalipsis();
	
	apocalipsis2.changeName('Nuevo apocalipsis');
	
	// const apocalipsis = new Apocalipsis('Soy apocalipsis... el unico')
	// const apocalipsis2 = new Apocalipsis('Soy apocalipsis... el unico')
	// const apocalipsis3 = new Apocalipsis('Soy apocalipsis... el unico')


	console.log(apocalipsis, apocalipsis2, apocalipsis3);
	




})()