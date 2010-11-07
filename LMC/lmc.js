function Lmc(){
  this.memory = this.initialize_memory();
}

Lmc.prototype.initialize_memory = function(){
  var size = 100;
  var result = [];
  for(var i = 0; i < 100; i++)
  {
    result.push(new Bytes(3, 10));
  }

  return result;
}
