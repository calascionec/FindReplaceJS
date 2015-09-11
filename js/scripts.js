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

$(document).ready(function() {
    $("form#find-replace").submit(function(event) {
        var stringToSearch = $("input#string-to-search").val();
        var findString = $("input#find-string").val();
        var replaceString = $("input#replace-string").val();
        var result = findReplace(stringToSearch, findString, replaceString);

        $(".string-to-search").text(stringToSearch);
        $(".replaced-string").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
