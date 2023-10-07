(() => {
  
	let avenger: any = 123;
	let exists;
	let power;


	avenger = 'Dr. strange';
	
	// console.log(avenger.charAt(1));
	console.log((avenger as string).charAt(4));
	
	avenger = 150.232222222;

	console.log(<number>avenger.toFixed(2));




	console.log(exists);
	console.log(power);
	



})();