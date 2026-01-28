function myname()
{
    return "sudarsan"
}
var a=myname()
console.log(a)

function area_of_rect(l,b)
{
    return l*b
    console.log("Hello") //this line will not be executed as return statement is before this line.
}
var b = area_of_rect(5,7)
console.log(b)