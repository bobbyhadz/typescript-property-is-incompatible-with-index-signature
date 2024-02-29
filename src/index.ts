export { };

// Property is incompatible with index signature in TypeScript

// EXAMPLE 1 - Use a union type to solve the error

type Employee = {
  [key: string]: string | number; // 👈️ now takes string or number
};

const dev = {
  salary: 100,
  name: 'Bobby Hadz',
};

const emp1: Employee = dev;
console.log(emp1);

// ---------------------------------------------------

// // EXAMPLE 2 - Turning off type checking with the `any` type

// type Employee = {
//   [key: string]: any;
// };

// const dev = {
//   salary: 100,
//   name: 'Bobby Hadz',
//   tasks: ['develop', 'test'],
// };

// const emp1: Employee = dev;
// console.log(emp1);

// ---------------------------------------------------

// // EXAMPLE 3 - Widen the type

// type Employee = {
//   [key: string]: string | number; // 👈️ widen type
// };

// function example(emp: Employee) {
//   return emp;
// }

// const emp2 = { id: 1, name: 'Alice' };

// // ✅ works now
// example(emp2);
