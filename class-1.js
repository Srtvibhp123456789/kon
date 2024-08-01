//wap to class called 'rectangle' with properties for with and height.include two method t clcuulate area and perimeter.
//create an instaces of the rectangle class and calculate its area and perimeter?

class rectangle {
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    calculateArea(){
        return this.width*this.height;
    }
    calculatePerimeter(){
        return 2* (this.width + this.height);
    }
    calculateperimeter(){
        return 2* (this.width +this.height);
    }
}
const Rectangle =new rectangle(12,10);
const area=Rectangle.calculateArea();
const perimeter=Rectangle.calculatePerimeter();

console.log(`rectangle area: ${area}`);
console.log(`Rectangle perimeter: ${perimeter}`);

