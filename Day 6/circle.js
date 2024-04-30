class Circle {
    

    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius = radius;
    }

    setRadius(radius){
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    displayDetails() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle(3.5, "blue");
circle.displayDetails();
console.log("Area:", circle.getArea());
console.log("Circumference:", circle.getCircumference());
