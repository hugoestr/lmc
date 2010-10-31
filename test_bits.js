module("Bits");

var b;

//setup
function SetUp()
{
  b = new Bit();
}
test("It should default to base 2", function(){
     SetUp();
     equals(b.base, 2, "default base is 2");
});

test("It should default value to zero,", function(){
   SetUp();
   equal(b.value, 0, "It should default to zero");
});

test("It should add to value", function(){
    SetUp();
    b.Add(1);
    equal(b.value, 1, "Value should be 1");
});

test("It should transforms greater values than its base and add the correct bit", function(){
  SetUp();
  b.Add(2);
  equal(b.value, 0 , "Value should be 0 because 00 & 10 return 10, with this value being 0" );
});
