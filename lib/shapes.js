// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150 50, 200 150, 100 150" fill="${this.shapeColor}"/>
        <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="24px" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}

class Rectangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="50px">${this.text}</text>
    </svg>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <circle cx="150" cy="150" r="100" fill="${this.shapeColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="50px">${this.text}</text>
    </svg>`
    }
}

module.exports = {Shape, Triangle, Rectangle, Circle};