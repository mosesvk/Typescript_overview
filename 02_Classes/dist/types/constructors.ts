class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    // "this: Department" will make this method more strict saying that describe() has to be added onto an Instance of Department OR it HAS to have a Name Property like the Department Class

    console.log('Department: ' + this.name)
    // -> will point to ANY object with a NAME property. remember, it doesn't only have to be a Copy of the Department class.
  }
}

// We have to pass the contstructor parameter to this.
const accounting = new Department('Accounting');

console.log(accounting); 
// -> Department {name: 'Accounting'}

accounting.describe()
// points to describe() in the class
// -> Department: Accounting
