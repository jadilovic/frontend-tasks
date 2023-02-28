export class Employee {
	constructor(name, base_salary, overtime, rate) {
		this.name = name;
		this.base_salary = base_salary;
		this.overtime = overtime;
		this.rate = rate;
	}

	getWage() {
		console.log(`Wage is : ${this.base_salary + this.overtime * this.rate}`);
	}
}

export const employee = {
	name: 'Aki',
	base_salary: 1000,
	overtime: 2,
	rate: 10,
	getWage: () => {
		console.log(
			`${employee.name}'s wage is : ${
				employee.base_salary + employee.overtime * employee.rate
			}`
		);
	},
};
