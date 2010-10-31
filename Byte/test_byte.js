module("Byte");

var b;

function SetUp()
{
  b = new Bytes();
}

test("It should default bit size to 8", function(){
    SetUp();
    equals(b.size, 8, "it should default to 8");
});
