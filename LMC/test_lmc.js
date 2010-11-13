module("LMC");

var l;

//Set up
function SetUp()
{
  l = new Lmc();
}

test("It should have 100 rows of memory", function(){
  SetUp();
  equals(l.memory.length, 100, "It has 100 cells");
});

test("It should have an accumulator that defaults in 0", function(){
  SetUp();
  equals(l.accumulator.value, 0, "Accumulator defaults in 0");
});

test("It should have a counter that defaults to zero", function(){
  SetUp();
  equals(l.counter, 0, "Counter is set at zero");
});

test("It should have a and input box that defaults to zero", function(){
  SetUp();
  equals(l.input.value, 0, "Counter is set at zero");
});

test("It should have a and input box that defaults to zero", function(){
  SetUp();
  equals(l.output.value, 0, "Counter is set at zero");
});

test("Counter should be able to be reset to zero", function() {
    SetUp();
    l.counter = 200;
    l.Reset();
    equals(l.counter, 0, "Counter reset to zero");
});

test("Counter should become zero is it goes over 100", function() {
  SetUp();
  l.counter = 99;
  l.IncrementCounter();
  equals(l.counter, 0, "It should be zero");
});

test("It should implement ADD, 1XX", function(){
  SetUp();
  l.memory[0].Set(200);
  l.ADD(0);
  equals(l.accumulator.value, 200, "Value should be 200");
});

test("It should implement SUB, 2XX", function(){
  SetUp();
  l.accumulator.Set(400);
  l.memory[0].Set(200);
  l.SUB(0);
  equals(l.accumulator.value, 200, "Value should be 200");
});

test("It should implement STA, 3XX", function(){
  SetUp();
  l.accumulator.Set(234);
  l.STA(2);
  equals(l.memory[2].value, 234, "The value should be 234");
});
