// Write your solution in this file!

const employee = {
    name: "Jonh",
    streetAddress: "120 Broad Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    var employee2 = Object.assign({}, employee, {[key]: value})
    return employee2
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    var employee3 = Object.assign({}, employee)
    delete employee3[key]
    return employee3
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}