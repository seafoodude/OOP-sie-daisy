const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./shapes");
const fs = require('fs');


class SVG {
    constructor() {
        this.width = 300;
        this.height = 200;
        this.shapes = [];
        this.text = "";
        this.textColor = "#000000";
        this.questions = [
            {
                type: "input",
                name: "text",
                message: "TEXT: Enter up to (3) characters:"
            }, {
                type: "input",
                name: "text-color",
                message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):"
            }, {
                type: "input",
                name: "shape",
                message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):"
            }, {
                type: "list",
                name: "pixel-img",
                message: "Choose which Pixel IMG you would like!",
                choices: ["Circle", "Triangle", "Square"],
            }
        ];
    }

    setShape(shape) {
        this.shapes.push(shape);
    }

    setText(text, color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = text;
        this.textColor = color;
    }

    render() {
        let svgString = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;

        for (const shape of this.shapes) {
            svgString += shape.render();
        }

        if (this.text) {
            svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }

        svgString += `</svg>`;
        return svgString;
    }



    run() {
        inquirer.prompt(this.questions).then((answers) => {
            const shapeClass = eval(answers['pixel-img']);
            const shapeColor = answers['shape'];
            const text = answers['text'];
            const textColor = answers['text-color'];

            const shape = new shapeClass();
            shape.setColor(shapeColor);
            console.log(shape);
            this.setShape(shape);
            this.setText(text, textColor);

            const fileName = 'logo.svg';
            const content = this.render();

            fs.writeFile(fileName, content, function (error) {
                if (error) {
                    return console.log(error);
                }
                console.log('Generated logo.svg');
            });

            console.log(content);
        });
    }
}

module.exports = SVG;