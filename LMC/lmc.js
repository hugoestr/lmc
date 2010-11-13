function Lmc(){
  var byte_size = 3;
  var base = 10; 

  this.accumulator = new Bytes(byte_size, base);
  this.counter = 0;
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

Lmc.prototype.INP = function() {
  this.accumulator.Set(this.input.value);
}
