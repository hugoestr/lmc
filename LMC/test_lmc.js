module("LMC");

var l;

//Set up
function SetUp()
{
  l = new Lmc();
}

function SetUpExecution()
{
  l = new Lmc();
  l.memory[0].Set(101);
  l.memory[1].Set(236);
  l.memory[2].Set(000);
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

test("It should implement LDA, 5XX", function(){
  SetUp();
  l.memory[34].Set(654);
  l.LDA(34);
  equals(l.accumulator.value, 654, "It should be 654");
});

test("It should implement BRA, 6XX", function(){
  SetUp();
  l.counter = 23;
  l.BRA(78);
  equals(l.counter, 78, "It should be equal to 78");
});

test("It should implement BRZ, 7XX, branching when 000", function(){
  SetUp();
  l.accumulator.Set(0);
  l.BRZ(86);
  equals(l.counter, 86, "It is true, so counter should be 86");
});

test("It should implement BRZ, 7XX, not branching", function(){
  SetUp();
  l.accumulator.Set(23);
  l.BRZ(86);
  equals(l.counter, 0, "It is true, so counter should be 0");
});

test("It should implement BRP, 8XX, branching", function(){
  SetUp();
  l.accumulator.Set(0);
  l.BRP(98);
  equals(l.counter, 98, "It is true, it should be 98");
});

test("It should implement 901, read input", function(){
  SetUp();
  l.accumulator.Set(234);
  l.input.Set(673);
  l.INP();
  equals(l.accumulator.value, 673, "Accumulator should now be 673");
});

test("It should implement OUT 902", function() {
  SetUp();
  l.accumulator.Set(43);
  l.OUT();
  equals(l.output.value, 43, "It should be 43");
});

test("It should implement HLT 000", function(){
  SetUp();
  l.is_on = true;
  l.HLT();
  equals(l.is_on, false, "on should be false");
});

test("It should implement DAT with zero used", function(){
  SetUp();
  l.DAT(243);
  equals(l.memory[0].value, 243, "It should be 243");
});

test("It should implement DAT, where the first available entry is not zero", function(){
  SetUp();
  l.memory[0].Set(1);
  l.memory[1].Set(2);
  l.DAT(243);
  equals(l.memory[2].value, 243, "It should be 243");
});


test("It should increment counter when execute cycle occurs", function(){
  SetUpExecution();
  l.Execute();
  equals(l.counter, 1, "Counter should be move to 1");
});

test("It should correctly do one step from the execute cycle", function(){
    SetUpExecution();
    l.Execute();
    equals(l.accumulator.value, 236, "It should be equals to 236");
});

test("It should run continously until halt", function(){
    SetUpExecution();
    l.Run();
    equals(l.counter, 3, "It should be two in the counter");
});

test("It should clear the accumulator when ressetting", function(){
  SetUp();
  l.accumulator.Set(234);
  l.Reset();
  equals(l.accumulator.value, 0, "It should be zero");
});

test("It should clear input at ressetting", function(){
  SetUp();
  l.input.Set(32);
  l.Reset();
  equals(l.input.value, 0, "It should be zero");
});

test("It should be clear output at ressetting", function(){
  SetUp();
  l.output.Set(32);
  l.Reset();
  equals(l.output.value, 0, "It should be zero");
});

test("It should load", function(){
  SetUp();
  var instructions = "101\n236\n000";
  l.Load(instructions);
  equals(l.memory[1].value, 236, "It should be ");
});

test("It should stop execution when INP", function() {
  SetUp();
  var instructions = "101\n236\n901\n000";
  l.Load(instructions);
  l.Run();
  equals(l.counter, 3, "It should be at 1");
});

test("It should load value from INPUT", function() {
  SetUp();
  var instructions = "901\n103\n000\n200";
  l.Load(instructions);
  l.Run();
  l.input.Set(20);
  l.Run();
  equals(l.accumulator.value, 220, "It should be at 220");
});
