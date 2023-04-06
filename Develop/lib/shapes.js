class Shape {
    constructor() {
        this.color = "#000000";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error("render method not implemented");
    }
}

class Circle extends Shape {
    constructor(color) {
        super();
        this.setColor(color);
        this.fillColor = this.color;
        this.radius = 80;
        this.x = 150;
        this.y = 100;
    }

    setFillColor(fillColor) {
        this.fillColor = fillColor;
    }

    render() {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.fillColor}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super();
        this.setColor(color);
        this.fillColor = this.color;
        this.points = "150, 18 244, 182 56, 182";
    }

    setFillColor(fillColor) {
        this.fillColor = fillColor;
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.fillColor}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super();
        this.setColor(color);
        this.fillColor = this.color;
        this.width = 120;
        this.height = 120;
        this.x = 90;
        this.y = 40;
    }

    setFillColor(fillColor) {
        this.fillColor = fillColor;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fillColor}" />`;
    }
}

module.exports = {Circle, Triangle, Square};