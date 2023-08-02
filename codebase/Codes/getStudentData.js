const student = require('../Models/studentData');

const getStudentDataList = () => {
    const studentList = [];
    for(let index = 0;index<5;index++)
    {
        const obj = new student('Ankit'+index,2000 + index,62-1374668+index);
        studentList[index] = obj;
    }
    return studentList;
}

module.exports = {getStudentDataList};