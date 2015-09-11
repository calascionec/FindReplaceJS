var findReplace = function(stringToSearch, findString, replaceString) {
    var stringToSearchArray = stringToSearch.split(" ");
    if (!replaceString) {
        if (stringToSearchArray.indexOf(findString) != -1) {
            return true;
        } else {
            return false;
        }
    }
    for(var i = 0; i < stringToSearchArray.length ; i++) {
        if (stringToSearchArray[i] === findString) {
            stringToSearchArray[i] = replaceString;
        }
    }
    return stringToSearchArray.join(" ");


};
