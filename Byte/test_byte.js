module("Byte");

var b;

function SetUp()
{
  b = new Bytes();
}

function SetUpDecimal()
{
  b = new Bytes(2, 10);
}

test("It should default bit size to 8", function(){
    SetUp();
    equals(b.size, 8, "it should default to 8");
});

test("It should default base to 2 ", function(){
    SetUp();
    equals(b.base, 2, "default base 2");
});

test("It should default to zero", function(){
  SetUp();
  equals(b.value, 0, "default value 0");
});

test("It should default to zero when representing string", function(){
    SetUp();
    var bits = b.bits();
    equals(b.bits(), "00000000", "bit representation");
});

test("It should give representation of bits when it has a value, value 1", function(){
  SetUp();
  b.value = 1;
  var bits = b.bits();
  equals(b.bits(), "00000001", "Value 00000001");
});

test("It should give representation of bits when it has a value, value 10", function(){
  SetUp();
  b.value = 10;
  var bits = b.bits();
  equals(b.bits(), "00001010", "Value 00001010");
});

test("It should have set carry bit by default to zero", function(){
  SetUp();
  equals(b.carry, 0, "carry set to zero");
});

test("It should set values", function(){
  SetUp();
  b.Set(250);
  equals(b.value, 250, "it should be 250");
});

test("It should add values adding below the the bit limit", function(){
  SetUp();
  b.Set(25);
  b.Add(25);
  equals(b.value, 50, "It should add to 50");
});

test("It should add values going over the bit limit, keeping only the top limit", function(){
  SetUp();
  b.Set(255);
  b.Add(1);
  equals(b.value, 0, "expected 0");
});

test("It should add values going over the bit limit, adding 1 to carry", function(){
  SetUp();
  b.Set(255);
  b.Add(1);
  equals(b.carry, 1, "expected carry 1");
});

test("It should be able to subtract the values", function(){
    SetUp();
    b.Set(255);
    b.Subtract(200);
    equals(b.value, 55, "expected value is 55");
});

test("It should set negative numbers results to zero", function(){
  SetUp();
  b.Set(1);
  b.Subtract(200);
  equals(b.value, 0, "expected value is zero");
});

test("It should not allow numbers to be added greater than limit", function(){
  SetUp();
  b.Set(25);
  b.Add(300);
  equals(b.value, 25, "Addition doesn't take place");
});

test("It should add the number in decimal", function(){
  SetUpDecimal();
  b.Set(23);
  b.Add(40);
  equals(b.value, 63, "It should 63");
});


test("It should go over 100 , with 00 in decimal", function(){
  SetUpDecimal();
  b.Set(99);
  b.Add(1);
  equals(b.value, 00, "It should 00");
});

test("It should go over 100, with carry 1", function(){
  SetUpDecimal();
  b.Set(99);
  b.Add(1);
  equals(b.carry, 1, "It should be 1");
});
