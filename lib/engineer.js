const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = "engineer";
    }

    getGithub(){
        return this.getGithub;
    }
};


module.exports = Engineer;