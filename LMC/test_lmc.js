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
