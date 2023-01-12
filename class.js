class Car{
    method(Wheel,engine,specs){
        console.log("wheels is", Wheel)
        console.log("engine is", engine)
        console.log("drive is", specs)
    }
    constructor(model,company){
        this.model = model
        this.company = company
    }
    review(){
        console.log(this.model," is good")
    }

}
class suv extends Car{
    constructor(nam,height,len,model,company){
        super(model,company);
        this.nam = nam
        this.height = height
        this.len = len
       
        
    }
    feature(){
        console.log(this.nam)
        console.log(this.height)
        console.log(this.len)
        console.log(this.model)
        console.log(this.company)
    }
    

}
class sedan extends Car{

}
Car.l = "under 5000mm"
var creta = new Car("sx","hundai")
creta.method(4,1.5,"Front-wheel")
// console.log(creta.constructor.l)
// console.log(creta.review())
var kusaq = new suv("kusaq",2000,4500,"monte-carlo","skoda")
console.log(kusaq.feature())
