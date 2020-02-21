const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "intern"
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return this.role
    }
};


module.exports = Intern;