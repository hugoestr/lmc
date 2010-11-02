function Bytes()
{
  this.size = 8;
  this.base = 2;
  this.value = 0;
  this.carry = 0;

}

Bytes.prototype.Add = function(value){
  this.value += value;
  if (this.value >= Math.pow(this.base, this.size))
  {
    this.value = 0;
    this.carry = 1;
  }
}

Bytes.prototype.bits = function(){ 
  var result = "";
  var value = this.value;

  for (var i= 0; value > 0 ; i++){
    var digit = value % this.base;
    value = (value - digit) / this.base;
    result = digit + result;
  }

  result = this.PadZeroes(this.size - i) + result;
  
  return result;
}

Bytes.prototype.PadZeroes = function(value){
  var result = "";
  for (var i = 0; i < value; i++)
  {
    result += "0";
  }

  return result;
}

Bytes.prototype.Set = function(value){
  this.value = value;
}

Bytes.prototype.Subtract = function(value)
{
  this.value -= value;

  if (this.value < 0){
    this.value = 0;
  }
}
