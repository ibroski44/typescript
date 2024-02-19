//introduction and setup
//compilling typescript
//type basics
const character = "mario";
console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
  console.log(input);
});
//object and Array
let mixed = ["ibroski", 4, 5, "divine", "amama", "angel"];
mixed.push("emmanuel");
mixed.push(21);
console.log(mixed);

let All = {
  name: "ibro",
  age: 23,
};
All.name = "samuel";
console.log(All);
//explicit type
let fName: string;
let age: number;
let isLoggedIn: boolean;

let combine = {
  fName: "wasiu",
  age: 26,
  isLoggedIn: false,
};
console.log(combine);
//arrays
//union type
let fruits: (string | number | boolean)[] = [];
fruits.push("orange");
fruits.push(48);
fruits.push(true);
console.log(fruits);

//Dynamics(any)
let survey: any[] = [];
survey.push("retail");
survey.push(2);
console.log(survey);
