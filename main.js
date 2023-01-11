var message = "This is message"
var age = 30
console.log(age)
age+= 4
console.log("after 4 years my age will be " +age)
console.log("message is " +message )
var value = true

console.log(value == false)
if(age <10){
    console.log("you are kid")
}
else if (age <20)(
    console.log("you are teenager")   
)
else if( age<30){
    console.log("you are young")
}
else{
    console.log("you are old")
}
for(i=0;i<5;i++){
    console.log(i)
}
function details(name,surname,myage){
    console.log("my name is",name)
    console.log("my surname is", surname)
    console.log("my age is", myage)
}
details("param","Tilva",21);