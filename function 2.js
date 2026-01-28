function person1(fName = "Sudarsan",lName,age) //default parameter given as "Sudarsan" in fNmae.
{
    fName = fName;
    lName = lName;
    age = age;
    console.log("First Name: "+fName)
    console.log("Last Name: "+lName)
    console.log("Age: "+age)
}
person1(undefined,"Marutha Muthu",23) //to use default parameter we need to pass "undefined" in function call.
person1("Vishaal","Marutha Muthu",25) //function call with all parameters.