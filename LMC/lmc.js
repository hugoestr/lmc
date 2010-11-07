function Lmc(){
  var byte_size = 3;
  var base = 10; 

  this.accumulator = new Bytes(byte_size, base);
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
