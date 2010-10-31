function Bit(base)
{
  this.base = 2;
  this.value = 0;
  this.carry = 0;

  if (base != null)
    this.base = base;
}

Bit.prototype.Add = function (value){
  var bitValue = value % this.base;  

  this.carry = Math.abs(value) / this.base;
  this.value += bitValue;
}

Bit.prototype.Subtract = function(value){
  this.Add(-value);
}
