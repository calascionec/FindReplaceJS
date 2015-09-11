var findReplace = function(stringToSearch, findString, replaceString) {
    // use of this regular expression as the parameter for the split method will break a string
    // into an array at everyword and at every punctuation mark so that it is not lost
    // while replacing a word.
    var stringToSearchArray = stringToSearch.split(/([_\W])/);

    // if no replacement string is given this conditional statement just checks to see if the
    // findString parameter is contained in the stringToSearch.
    if (!replaceString) {
        if (stringToSearchArray.indexOf(findString) != -1) {
            return true;
        } else {
            return false;
        }
    }

    // this loop looks through the string that has been converted into an array for any values that
    // match the findString. if it does match, it is replaced with the replaceString.
    for(var i = 0; i < stringToSearchArray.length ; i++) {
        if (stringToSearchArray[i] === findString) {
            stringToSearchArray[i] = replaceString;
        }
    }
    return stringToSearchArray.join("");
};

$(document).ready(function() {
    $("form#find-replace").submit(function(event) {
        var stringToSearch = $("input#string-to-search").val();
        var findString = $("input#find-string").val();
        var replaceString = $("input#replace-string").val();
        var result = findReplace(stringToSearch, findString, replaceString);
        $(".string-to-search").empty();
        $(".find-string").empty();
        $(".not").empty();
        $(".replaced-string").empty();
        $("#result").hide();
        $("#result2").hide();

        $(".string-to-search").text(stringToSearch);
        $(".find-string").text(findString);
        if (result === true) {
            $("#result2").show();
        } else if (result === false) {
            $(".not").text("not");
            $("#result2").show();
        } else {
            $(".replaced-string").text(result);
            $("#result").show();
        }
        event.preventDefault();
    });
});
