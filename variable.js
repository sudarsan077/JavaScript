var a=10   //global scope
var b=20
console.log(a+b) 
{
    let a=30        //private scope console.log only work into the bracket, if i call a in outside the bracket it will throw the error
    console.log(a)
}
const c=40
      //c=50         //we cont able to change the const value. if you unlock the c=50; it throw the error
console.log(c)       //but we change the data in var and let
