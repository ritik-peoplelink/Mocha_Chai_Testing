const checkPalindrome = (str) => {
    let startIndex = 0,lastIndex = str.length-1;
    while(startIndex !=lastIndex)
    {
        if(str.charAt(startIndex) !== str.charAt(lastIndex))
        {
            return false;
        }else{
            startIndex++;
            lastIndex--;
        }
        return true;
    }
}

module.exports = {checkPalindrome};