// var message = "This is message"
// var age = 30
// console.log(age)
// age+= 4
// console.log("after 4 years my age will be " +age)
// console.log("message is " +message )
// var value = true

// console.log(value == false)
// if(age <10){
//     console.log("you are kid")
// }
// else if (age <20)(
//     console.log("you are teenager")   
// )
// else if( age<30){
//     console.log("you are young")
// }
// else{
//     console.log("you are old")
// }
// for(i=0;i<5;i++){
//     console.log(i)
// }
// function details(name,surname,myage){
//     console.log("my name is ",name)
//     console.log("my surname is ", surname)
//     console.log("my age is", myage)
// }
// details("param","Tilva",21);

function buttonclicked(){    
    console.log("button click");
    
    var inputext = document.getElementsByClassName("input")
    document.getElementById("text").innerHTML = "Name is" + inputext[0].value;
    // console.log(document.getElementById("text").innerHTML)
}

var btn = document.getElementById("button");
btn.addEventListener("click", buttonclicked); 

// var car = ["i10","i20","creta"];
// console.log(car)
// car.forEach(function(a,b){
//     console.log(a,b)
// })
// car.shift()
// console.log(car.shift())
// car.unshift("kusaq")
// car.push("harrier")
// car.push("octavia")
// var index = car.indexOf('octavia')
// console.log(index)

// function  newfunc(a,b){
//     var s
    
//     if(typeof b === "number"){
//         s = a + b
//         return s
        
//     }
//     else{
//         var q = b
//         s = a + q
//         return s
//     }
    
// }
// var a = 5
// var s = "6"
// console.log(newfunc(a,s))

function  newfunc(one,two){
    var int = 0
    
    if(typeof a !== "undefined"){
        int = a 
        return int
        
    }
    else{
        console.log("undefined")
    }
    
}
var a ;
var b = "ksjdnf"
var newobj = newfunc(a,b)
console.log(newobj)

var a = ['1','6','4','2','200']
a.sort(function (c , b) {
    return c-b})

var b = [1,2,3,5,6,7,8]
b.sort(function (a,b){return a-b})

var n = b.length

for(i=0;i<n-1;i++){
    if(b[i]+1!=b[i+1]){
        console.log("missing number is",b[i]+1)
    }
}
