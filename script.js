// Name definition
let personNames = {
    values: ["Dennis Ritchie", "Charles Simonyi", "Andy Hopper", "Ken Thompson", "Yukihiro Matsumoto",
             "James Gosling", "John Resig", "Brendan Eich", "Mark Adler", "Marc Andreessen",
             "Larry Wall", "Larry Tesler", "Linus Torvalds", "Richard Brodie", "Richard Greenblatt"]
};

// IIFE (Immediately Invoked Function Expression): No argument
(function () {
    console.log(personNames.values);
}());

// IIFE (Immediately Invoked Function Expression): One argument
(function (name) {
    let ret = [];
    for (let i = 0; i < personNames.values.length; i++)
        if (personNames.values[i].indexOf(name) == 0)
            ret.push(personNames.values[i]);
    console.log(ret);
}("Larry"));

// IIFE (Immediately Invoked Function Expression): Two argument
(function (first, last) {
    let ret = [];
    for (let i = 0; i < personNames.values.length; i++)
        if (personNames.values[i] == (first + " " + last))
            ret.push(personNames.values[i]);
    console.log(ret);
}("Yukihiro", "Matsumoto"));