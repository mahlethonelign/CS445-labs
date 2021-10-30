class University {
    name: String;
    dept: String;
    constructor(name: String, dept: String) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu = new University("MIU", "MSD");
miu.graduation(2021);
