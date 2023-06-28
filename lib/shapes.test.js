// Jest tests for shapes
const shapes = require('../lib/shapes');

describe('Shapes', () => {
    
    describe('Triangle', () => {
        it('should create svg file with a red triangle and blue "JDH" text', () => {
            const shape = new shapes.Triangle(
                'JDH',
                'blue',
                'red'
            );

            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150 50, 200 150, 100 150" fill="red"/>
        <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="24px" fill="blue">JDH</text>
    </svg>`);
        })
    })

    describe('Rectangle', () => {
        it('should create svg file with a tan rectangle and green "PCC" text', () => {
            const shape = new shapes.Rectangle(
                'PCC',
                'green',
                'tan'
            );

            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="0" y="0" width="300" height="200" fill="tan"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="green" font-size="50px">PCC</text>
    </svg>`);
        })
    })

    describe('Circle', () => {
        it('should create svg file with a black circle and white "AOL" text', () => {
            const shape = new shapes.Circle(
                'AOL',
                'white',
                'black'
            );

            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <circle cx="150" cy="150" r="100" fill="black"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="50px">AOL</text>
    </svg>`);
        })
    })
    
})