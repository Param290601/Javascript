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
Car.l = "under 5000mm"
var creta = new Car("sx","hundai")
creta.method(4,1.5,"Front-wheel")
console.log(creta.constructor.l)
console.log(creta.review())