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

  this.carry = (Math.abs(value) - Math.abs(bitValue)) / this.base;
  this.value += bitValue;

  if (this.value < 0)
    this.value = 0;

  if (this.value >= this.base)
  {
      this.Set(this.value);
  }
}

Bit.prototype.Reset = function() {
  this.value = 0;
}

Bit.prototype.Set = function(value)
{
  this.value = 0;
  if (value < 0)
  {
    return;
  }
  this.Add(value);
}

Bit.prototype.Subtract = function(value){
  this.Add(-value);
}
