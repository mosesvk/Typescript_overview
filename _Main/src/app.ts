class Department {
  // private id: string;
  // private name: string;
  // private employees: string[] = [];
  // private makes 'employees' only accessible from INSIDE the Class. So any method inside the class is still able to work with employees.

  constructor(
    private readonly id: string,
    private name: string,
    private employees: string[] = []
  ) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('max');
accounting.addEmployee('trey');

// accounting.employees[2] = 'Anna'
// this will show an error because employees has PRIVATE modifier

accounting.describe();
accounting.printEmployeeInformation();
