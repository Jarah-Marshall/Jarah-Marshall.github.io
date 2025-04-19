//Problem 1
const employeeInfo = {
    "employees":[
        {
            "firstName" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligible" : true
        },
        {
            "firstName" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible" : true
        },
        {
            "firstName" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible" : false
        }
    ]
}

console.log("Problem 1", employeeInfo);
//Problem 2
const companyInfo = {
        "companyName" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees" : employeeInfo
}

console.log("Problem2", companyInfo);

//Problem 3
const newEmployee = {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raiseEligible" : false
};
employeeInfo.employees.push(newEmployee);
console.log("Problem 3", employeeInfo);

//Problem 4
let sum = 0;
for(let i = 0; i < 4; i++)
{
    sum += employeeInfo.employees[i].salary;
}
console.log("Problem 4", `Total salary for all employees: $${sum}`);

//Problem 5
console.log("Problem 5");
for(let i = 0; i < 4; i++)
{  
    let newSalary = employeeInfo.employees[i].salary
    if(employeeInfo.employees[i].raiseEligible === true)
    {
        newSalary += newSalary * .10; 
        employeeInfo.employees[i].raiseEligible = false;
        console.log(`${employeeInfo.employees[i].firstName} is eligible for a raise! Their new salary is ${newSalary}`);
    }
}
console.log("Updated Array", employeeInfo);
//Problem 6

const WorkingFromHome = ['Anna', 'Sam'];

for(let j = 0; j < 4; j++){
    employeeInfo.employees[j].wfh = false;
    for(let k = 0; k < 2; k++)
    {
        if(employeeInfo.employees[j].firstName === WorkingFromHome[k])
        {
            employeeInfo.employees[j].wfh = true;
        }
    }
}

console.log("Problem 6", employeeInfo);


