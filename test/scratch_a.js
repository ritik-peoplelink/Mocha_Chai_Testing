var chai = require('chai');
var assert = chai.assert;
const ref = require('../codebase/Codes/ispalindromeString');

describe(title ='Variable DataType Test',function(){
    var str = "This is String Value";
    const AGE = 21;
    it('It Should be String',function(){
        assert.isString(str);
    });
    it('It should be Number',function(){
        assert.typeOf(AGE,'Number');
    })
}); 

describe(title ='Function Response Validation',function(){
    
    var first_test_case= "Not a palin";
    var second_test_case = "MooM";
    it('Is Calling Function ?',()=>{
        assert.isFunction(ref.checkPalindrome,'This should be function');
    })
    it('First Test Case : False',function(){
        const res = ref.checkPalindrome(first_test_case);
        assert.isFalse(res,'This is not Palindrome');
    })
    it('Second Test Case : True',()=>{
        const res = ref.checkPalindrome(second_test_case);
        assert.isTrue(res,'This is not Palindrome');
    })
}); 