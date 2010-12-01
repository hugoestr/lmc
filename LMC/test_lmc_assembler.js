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

test("It should translate STA correctly", function(){
  SetUp();
  var line = "STA 34";
  var output = a.Assemble(line);
  equals(output, "334", "It should be 334");
});

test("It should translate LDA correctly", function(){
  SetUp();
  var line = "LDA 73";
  var output = a.Assemble(line);
  equals(output, "573", "It should be 573");
});

test("It should translate BRA correctly", function(){
  SetUp();
  var line = "BRA 94";
  var output = a.Assemble(line);
  equals(output, "694", "It should be 694");
});

test("It should translate BRZ correctly", function(){
  SetUp();
  var line = "BRZ 83";
  var output = a.Assemble(line);
  equals(output, "783", "It should be 783");
});

test("It should translate BRP correctly", function(){
  SetUp();
  var line = "BRP 52";
  var output = a.Assemble(line);
  equals(output, "852", "It should be 852");
});

test("It should translate INP correctly", function(){
  SetUp();
  var line = "INP";
  var output = a.Assemble(line);
  equals(output, "901", "It should be 901");
});

test("It should translate OUT correctly", function(){
  SetUp();
  var line = "OUT";
  var output = a.Assemble(line);
  equals(output, "902", "It should be 902");
});

test("It should translate HLT correctly", function(){
  SetUp();
  var line = "HLT";
  var output = a.Assemble(line);
  equals(output, "000", "It should be 000");
});

test("It should handle well two lines of code", function(){
  SetUp();
  var line = "ADD 12\nSUB 14";
  var output = a.Assemble(line);
  equals(output, "112\n214", "It should be 112[newline]214");
});

test("It should ignore comments", function(){
  SetUp();
  var line = "ADD 12 //This is a line\nSUB 14 //Second comment";
  var output = a.Assemble(line);
  equals(output, "112\n214", "It should be 112[newline]214");
});
