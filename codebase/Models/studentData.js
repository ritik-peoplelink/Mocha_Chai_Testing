class StudentData 
{
    constructor(name,birthYear,phone)
    {
        this.name = name;
        this.birthYear = birthYear;
        this.phone = phone;
    }
    getStudentAge()
    {
        const date = new Date();
        return date.getFullYear() - this.birthYear;
    }

    getStudentInfo()
    {
        const info = `This is ${this.name}.\n He is ${this.getStudentAge} Years Old.\n You may contact him ${this.phone}`;
        return info;
    }
    
}

module.exports  = StudentData;