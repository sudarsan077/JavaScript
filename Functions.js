function add()
{
    var a=10
    var b=20
    var c=a+b
    console.log(c)
}
function favactor()
{
    console.log("Favourite Actor: Vijay")
}

function favmovie()
{
    console.log("Favourite Movie: M umaran Son of Mahalakshmi")
}
//function with parameters
function person1(fName,lName,age)
{
    fName = fName;
    lName = lName;
    age = age;
    console.log("First Name: "+fName)
    console.log("Last Name: "+lName)
    console.log("Age: "+age)
}
add()
favactor()
favmovie()
//calling function with parameters
console.log()
console.log("Person Details: Calling with input parameters")
person1("Ajith","Kumar",45)