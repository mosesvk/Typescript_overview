class Department {
  // private id: string;
  // private name: string;
  // private employees: string[] = [];
  // protected employees: string[] = [];
  // private makes 'employees' only accessible from INSIDE the Class. So any method inside the class is still able to work with employees.

  constructor(
    private readonly id: string,
    private name: string,
    // private employees: string[] = [],
    // the Protected is Like Private, but we can also access it outside the class Department, 
    protected employees: string[] = [],
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

// We will now create different Departments using INHERITANCE. they will inherit Department object.  

class ITDepartment extends Department { 
  admins: string[]; 
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); 
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addEmployee(name: string) {
    if (name == 'Max') {
      return;
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment('d1', ['Mo, Solia']);

it.addEmployee('max');
it.addEmployee('trey');
it.describe();
it.printEmployeeInformation();
console.log(it)

const accounting = new AccountingDepartment('d2', [])

accounting.addReport('Something went wrong...')
accounting.printReports();
