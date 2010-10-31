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

test("It should substract a value", function(){
  SetUp();
  b.value = 1;
  b.Subtract(1);
  equal(b.value, 0 , "Value should be 0");
});

test("It should determine its bit value, subtract that value when value greater than its bit value.", function(){
  SetUp();
  b.value = 1;
  b.Subtract(2);
  equals(b.value, 1, "01 minus 10 would give us 1");
});

test("It should default its carry value to zero", function(){
  SetUp();
  equal(b.carry, 0, "Carry value defaults to zero");
});

test("It should set carry value when addition exceeds base", function(){
  SetUp();
  b.Add(2);
  equal(b.carry, 1, "carry is set to 1");
});

test("It should set carry for subtraction if value exceeds base", function(){
  SetUp();
  b.value = 1;
  b.Subtract(2);
  equals(b.carry, 1, "01 minus 10 would give us 11");
});

module("Bit, base 10");

function SetUpBase8()
{
  b = new Bit(8);
}

test("It should set default base from constructor", function(){
  SetUpBase8();
  equal(b.base, 8, "It should default to 8");
});
