class EmployeePayRoll {

    // getter and setter method are used to get a value and set it.
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = startDate; 
    }

    // toString() method is used to covert object into string format.
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "name=" + this.name + "\nprofilePic=" + this.profilePic + "\ngender=" + this.gender + "\ndepartment=" + this.department +
            "\nsalary=" + this.salary + "\nstartDate=" + empDate + "\nnote=" + this.note;
    }
}