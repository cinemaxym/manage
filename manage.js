/*
The following script manages different kinds of employees in a sales department. 
Each month, all the employees have an employee-specific sales target expressed as the number of successful sales.
*/

//Parent class Emloyees constructor 
class Employees {
    constructor(name, kind){
        this.name = name;
        this.kind = kind;
        this.salesTarget = false;
    }
    displayName(){                               //method to display name of employee.
        console.log(`Name: ${this.name}`);
    }
    salesTargetSuccessful(){                     //method to change salesTarget for true.
        this.salesTarget = true;
    }
    displayKind(){                               //method to display a type of employee
        console.log(`Type of employee: ${this.kind}`);
    }
    calculatePayout(){                           //method to calculate and display payout 
        if (this.salesTarget == true) {
            console.log(`Sales target successful! Payout: ${this.monthlySalary + this.monthlySalary*0.1} $ \nPayout formula: monthly salary (${this.monthlySalary}) + 10% (${this.monthlySalary*0.1}) \n`); 
        }
        else {
            console.log(`Payout: ${this.monthlySalary} $\nPayout formula: Monthly salary (${this.monthlySalary}) only \n`); 
        }
    }
}
//Child class Salaried constructor
class Salaried extends Employees{
    constructor(name, kind, monthlySalary){
        super(name,kind);
        this.monthlySalary = monthlySalary;
    }
}
//Child class Hourly constructor
class Hourly extends Employees{
    constructor(name, kind, hourlySalary, numberOfHours){
        super(name, kind);
        this.hourlySalary = hourlySalary;
        this.numberOfHours = numberOfHours;
    }

    calculatePayout(){                          //method to calculate and display payout 
        if (this.salesTarget == true) {
            console.log(`Sales target successful! Payout: ${(this.hourlySalary*0.5 + this.hourlySalary)*this.numberOfHours} $\nPayout formula: (hourly salary (${this.hourlySalary}) + 50% (${this.hourlySalary*0.5})) * number of hours (${this.numberOfHours})\n`); 
        }
        else {
            console.log(`Payout: ${this.hourlySalary*this.numberOfHours} $\nPayout formula: hourly salary (${this.hourlySalary}) * number of hours (${this.numberOfHours})\n`); 
        }
    }
}
//Child class Hybrid constructor 
class Hybrid extends Employees{
    constructor(name, kind, monthlySalary, hourlySalary, numberOfHours) {
        super(name, kind);                     
        this.monthlySalary = monthlySalary;
        this.hourlySalary = hourlySalary;
        this.numberOfHours = numberOfHours;
    }

    calculatePayout(){                       //method to calculate and display payout 
        if (this.salesTarget == true) {
            console.log(`Sales target successful! Payout: ${this.monthlySalary + (this.hourlySalary*0.2 + this.hourlySalary)*this.numberOfHours} $\nPayout formula: monthly salary (${this.monthlySalary}) + (hourly salary (${this.hourlySalary}) + 20% (${this.hourlySalary*0.2})) * number of hours (${this.numberOfHours})\n`); 
        }
        else {
            console.log(`Payout: ${this.monthlySalary + this.hourlySalary*this.numberOfHours} $\nPayout formula: monthly salary (${this.monthlySalary}) + hourly salary (${this.hourlySalary}) * number of hours (${this.numberOfHours})\n`); 
        }
    }
}

// The instances of the Salaries kind of employee.
let employee1 = new Salaried("Max", "Salaried", 3000);
let employee2 = new Salaried("Julia", "Salaried", 3200);

// The instances of the Hourly kind of employee.
let employee3 = new Hourly("Lisa", "Hourly", 30, 160); 
let employee4 = new Hourly("David", "Hourly", 25, 160);

// The instances of the Hybrid kind of employee.
let employee5 = new Hybrid("Paul", "Hybrid", 3000, 20, 60);
let employee6 = new Hybrid("Georgina", "Hybrid", 2800, 20, 70);

//method calls for emloyee1
employee1.displayName()        //calls method to display name of employee.
employee1.displayKind()        //calls method to display a type of employee
employee1.calculatePayout()    //calls method to calculate and display payout

//method calls for emloyee2
employee2.salesTargetSuccessful()   //calls method to change salesTarget for true.
employee2.displayName()             //calls method to display name of employee.
employee2.displayKind()             //calls method to display a type of employee
employee2.calculatePayout()         //calls method to calculate and display payout

//method calls for emloyee3
employee3.displayName()         //calls method to display name of employee.
employee3.displayKind()         //calls method to display a type of employee
employee3.calculatePayout()     //calls method to calculate and display payout

//method calls for emloyee4
employee4.salesTargetSuccessful()   //calls method to change salesTarget for true.
employee4.displayName()             //calls method to display name of employee.
employee4.displayKind()             //calls method to display a type of employee
employee4.calculatePayout()         //calls method to calculate and display payout

//method calls for emloyee5
employee5.displayName()         //calls method to display name of employee.
employee5.displayKind()         //calls method to display a type of employee
employee5.calculatePayout()     //calls method to calculate and display payout

//method calls for emloyee6
employee6.salesTargetSuccessful()   //calls method to change salesTarget for true.
employee6.displayName()             //calls method to display name of employee.
employee6.displayKind()             //calls method to display a type of employee
employee6.calculatePayout()         //calls method to calculate and display payout

