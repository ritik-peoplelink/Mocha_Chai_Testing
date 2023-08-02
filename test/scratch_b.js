var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
const sinon = require('sinon');
const ref = require('../codebase/Codes/getStudentData');
const studentObj = require('../codebase/Models/studentData');
describe(title='Function Response Test',()=>{
    const refArray = ref.getStudentDataList();
    const myObj = new studentObj('test',2001,938393);
    it('This Data Length Should be Five',()=>{
        refArray.should.be.lengthOf(5);
    })
    it('First name should be Ankit0',()=>{
        let firstname = refArray[0].name;
        firstname.should.equal('Ankit0');
    })
    it('Student Age Check',()=>{
        let StudentObj = new studentObj('test',2001,938393);
        expect(StudentObj.getStudentAge()).to.be.equal(22);
    })

    it('Function Call Count Check',()=>{
        var spyObj = sinon.spy(myObj,'getStudentAge');
        myObj.getStudentAge();
        expect(spyObj.calledOnce).to.be.true;
    })
})