module("LMC");

var l;

//Set up
function SetUp()
{
  l = new Lmc();
}

test("It has memory", function(){
  SetUp();
  equals(l.memory.length, 100, "It has cells");
});

test("It has an accumulator that defaults in 0", function(){
  SetUp();
  equals(l.accumulator.value, 0, "Accumulator defaults in 0");
});
