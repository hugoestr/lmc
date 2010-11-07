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
