describe("findReplace", function() {
    it("Will take one word from the user and check to see if it is the same as another word taken from the user", function(){
        expect(findReplace("Hello", "Hello")).to.equal(true);
    });

    // it("takes blank input and returns an error.", function(){
    //     expect(findReplace("Hello", "", "blah")).to.equal("Error!");
    // });

    //single letters
    // 'a', 'a', 'b' should output 'b'

    it("will take 3 words from user: 1. to search, 2. to find, 3. to replace. will replace the stringToSearch with replaceString if stringToSearch ==== findString", function(){
        expect(findReplace("Hello", "Hello", "Goodbye")).to.equal("Goodbye");
    });

    it("search a multiple word string for a word, if found will replace with another word", function(){
        expect(findReplace("This is a test sentence", "sentence", "string")).to.equal("This is a test string");
    });

    it("Will keep punctuation while still able to change given word", function(){
        expect(findReplace("This, test, has, a lot, of unnecessary, commas!", "commas", "punctuation")).to.equal("This, test, has, a lot, of unnecessary, punctuation!");
    });


// It will replace one letter with a different letter.
// It will replace one word with a different full word.
// It will replace one word in a full sentence with another word.
// It will replace multiple instances of one word with a different word.
//exceptions
// It will replace complete matches only. 'he' does not match 'hello'
// It will replace words that include punctuation if they match.
// It will include different capitalization as a match.
// It will not change the sentence if the search word is not found.
});
