function Lmc_Assembler(){
  this.symbols = {
  "HLT" : 0, 
  "ADD" : 1, 
  "SUB" : 2, 
  "STA" : 3,
  "LDA" : 5,
  };
}

Lmc_Assembler.prototype.Assemble = function(input){
 var result = "";
 var lines = input.split("\n");
 
 for(var i = 0; i < lines.length; i++){
    result += this.parseLine(lines[i]) + "\n";
 }

 result = result.replace(/\n$/, "");

 return result;
}

Lmc_Assembler.prototype.parseLine = function(input ){
 var result = "";
 var tokens = input.split(" ");
 
 result = this.symbols[tokens[0]] + tokens[1];

  return result;
}
