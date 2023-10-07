(() => {

  abstract class Mutate {
		constructor(
			public name: string,
			public realname: string,
		) {}





	}

	class Xmen extends Mutate {
		salvarMundo() {
			return 'Mundo a salvo';
		}
	};
	class Villian extends Mutate {
		conquistarMundo() {
			return 'Mundo conquistado'
		}
	};

	const wolverine = new Xmen('Wolverine', 'Logan');
	const magneto = new Villian('Magneto', 'Magnus');

	// console.log(wolverine);
	// // console.log(wolverine.salvarMundo());


	// console.log(magneto);
	// // console.log(magneto.conquistarMundo());


	const printName = ( character: Mutate) => {
		// console.log(character.realname);
		
	}

	printName(magneto)

	
		




})()