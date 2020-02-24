const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub(){
        return this.github;
    }
};


module.exports = Engineer;