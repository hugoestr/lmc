function Lmc(){
  var byte_size = 3;
  var base = 10; 

  this.accumulator = new Bytes(byte_size, base);
  this.counter = 0;
  this.is_on = false;
  this.input_wait = false;

  this.input = new Bytes(byte_size, base);
  this.output = new Bytes(byte_size, base);
  this.memory = this.initialize_memory(byte_size, base, 100);

}

Lmc.prototype.initialize_memory = function(byte_size, base, array_size){
  var size = 100;
  var result = [];
  for(var i = 0; i < array_size; i++)
  {
    result.push(new Bytes(byte_size, base));
  }

  return result;
}

Lmc.prototype.Reset = function() {
  this.counter = 0;

  this.accumulator.Set(0);
  this.input.Set(0);
  this.output.Set(0);
}

Lmc.prototype.IncrementCounter = function() {
  this.counter++;
  if (this.counter >= 100)
    this.counter = 0;
}

Lmc.prototype.ADD = function(address) {
  this.accumulator.Add(this.memory[address].value);
}

Lmc.prototype.SUB = function(address) {
  this.accumulator.Subtract(this.memory[address].value);
}

Lmc.prototype.STA = function(address) {
  this.memory[address].Set(this.accumulator.value);
}

Lmc.prototype.LDA = function(address) {
  this.accumulator.Set(this.memory[address].value);
}

Lmc.prototype.BRA = function(address) {
  this.counter = address;
}

Lmc.prototype.BRZ = function(address) {
  if (this.accumulator.value == 0)
    this.counter = address;
}

Lmc.prototype.BRP = function(address) {
  if (this.accumulator.value >= 0)
    this.counter = address;
}

Lmc.prototype.INP = function() {
  this.accumulator.Set(this.input.value);
}

Lmc.prototype.Interrupt = function(){
  this.is_on = false;
}

Lmc.prototype.OUT = function() {
  this.output.Set(this.accumulator.value);
}

Lmc.prototype.DAT = function(value) {
  for(var i = 0; i < this.memory.length; i++){
    if (this.memory[i].value == 0){
      this.memory[i].Set(value);
      break;
    }
  }
}

Lmc.prototype.HLT = function(){
  this.is_on = false;
}

Lmc.prototype.Symbols = function(op, value) {
 switch(op){
  case 0:
    this.HLT();
    break;
  case 1:
    this.ADD(value);
    break;
  case 2:
    this.SUB(value);
    break;
  case 3:
    this.STA(value);
    break;
  case 5:
    this.LDA(value);
    break;
  case 6:
    this.BRA(value);
    break;
  case 7:
    this.BRZ(value);
    break;
  case 8:
    this.BRP(value);
    break;
  case 9:
    this.INOUT(value);
  default:
    break;
 }
}

Lmc.prototype.INOUT = function(value) {
  if (value == 1)
    this.Interrupt();
  else
    this.OUT();
}

Lmc.prototype.Execute = function() {
  var instructionAddress = this.counter;
  var instruction = this.memory[instructionAddress].bits();
  this.counter++;

  var op = parseInt(instruction[0]);
  var address = parseInt(instruction.slice(1));

  this.Symbols(op, address);
}



Lmc.prototype.Load = function(instructions) {
  var ops = instructions.split('\n');
  
  for(var i = 0; i < ops.length ; i++) {
      this.memory[i].Set(parseInt(ops[i]));
  }
}

Lmc.prototype.Run = function(){
  this.is_on = true;
  while (this.is_on){
    if (this.input_wait == true){
      this.INP();
      this.input_wait == false;
    }
    this.Execute();
  }
}

