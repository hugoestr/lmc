function Lmc_Assembler(){

}

Lmc_Assembler.prototype.Assemble = function(input){
 var result = "";
 var tokens = input.split(" ");
 
 if (tokens[0] == "ADD")
    result = "1" + tokens[1];
 else 
   result = "2" + tokens[1];

 return result;
}
