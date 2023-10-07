(() => {


  interface Hero {
    name: string;
    age: number;
    powers: number[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: [2, 1],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 24,
    powers: [1],
    getName() {
      return this.name;
    },
  };







})();
