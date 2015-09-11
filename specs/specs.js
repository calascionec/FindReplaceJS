describe("findReplace", function() {
    it("Will take one word from the user and check to see if it is the same as another word taken from the user", function(){
        expect(findReplace("Hello", "Hello")).to.equal(true);
    });

    it("will take 3 words from user: 1. to search, 2. to find, 3. to replace. will replace the stringToSearch with replaceString if stringToSearch ==== findString", function(){
        expect(findReplace("Hello", "Hello", "Goodbye")).to.equal("Goodbye");
    });

    it("search a multiple word string for a word, if found will replace with another word", function(){
        expect(findReplace("This is a test sentence", "sentence", "string")).to.equal("This is a test string");
    });

    it("Will keep punctuation while still able to change given word", function(){
        expect(findReplace("This, test, has, a lot, of unnecessary, commas!", "commas", "punctuation")).to.equal("This, test, has, a lot, of unnecessary, punctuation!");
    });
});
