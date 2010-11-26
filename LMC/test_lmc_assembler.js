module("LMC Assembler");

var a;
function SetUp(){
  a = new Lmc_Assembler();
}

test("It should work translate ADD correctly", function(){
  SetUp();
  var line = "ADD 12";
  var output = a.Assemble(line);
  equals(output, "112", "It should be 112");
});

test("It should translate ADD correctly with a different value", function(){
  SetUp();
  var line = "ADD 14";
  var output = a.Assemble(line);
  equals(output, "114", "It should be 114");
});

test("It should translate SUB correctly", function(){
  SetUp();
  var line = "SUB 12";
  var output = a.Assemble(line);
  equals(output, "212", "It should be 212");
});
