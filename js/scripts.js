var findReplace = function(stringToSearch, findString, replaceString) {
    if (!replaceString) {
        if (stringToSearch === findString) {
            return true;
        } else {
            return false;
        }
    }
    if (stringToSearch === findString) {
        stringToSearch = replaceString;
        return stringToSearch;
    }
};
