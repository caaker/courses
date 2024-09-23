// object literal
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  ssn: '123-456-2356'
};

// object literal
let job = {
  jobTitle: 'JavaScript Developer',
  location: 'USA'
};

// object spread
let employee = {
  ...person,
  ...job
};

console.log(employee)