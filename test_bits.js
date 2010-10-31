module("bits");

//setup
var b = new Bit();

test("Bit has base defaults to 2", function(){
    
    equals(b.base, 2, "default base is 2");
});

test("Bit has a value, defaults to zero,", function(){
  equal(b.value, 0, "It should default to zero");
});

test("Bit be AND", function(){
    
});
