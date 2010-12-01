function Lmc_Assembler(){
  this.labels = {};
  this.symbols = {
  "HLT" : "000", 
  "ADD" : 1, 
  "SUB" : 2, 
  "STA" : 3,
  "LDA" : 5,
  "BRA" : 6,
  "BRZ" : 7,
  "BRP" : 8,
  "INP" : 901,
  "OUT" : 902,
  "DAT" : "",
  };
}

Lmc_Assembler.prototype.Assemble = function(input){
 var result = "";
 this.lables = {};

 var lines = input.split("\n");
 
 for(var i = 0; i < lines.length; i++){
    result += this.parseLine(lines[i], i) + "\n";
 }
 
 for(var key in this.labels){
    result = result.replace(key, this.labels[key]);
 }

 result = result.replace(/\n$/, "");

 return result;
}

Lmc_Assembler.prototype.parseLine = function(input, line){
 var result = "";
 input = input.replace(/\/\/.*$/g, "");
 var tokens = input.split(" ");
 
 if (tokens.length == 3){
   if (line < 10)
     line = "0" + line;
    this.labels[tokens[0]] = line;
    tokens.shift();
 };

 result = this.symbols[tokens[0]];
     
 if (tokens[1] != null)
  result += tokens[1];

  return result;
}
