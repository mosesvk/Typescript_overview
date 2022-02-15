class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

// We have to pass the contstructor parameter to this.
const accounting = new Department('Accounting');

console.log(accounting); 
// -> Department {name: 'Accounting'}
