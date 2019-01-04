function Point (x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function() {
    return `${this.x},${this.y}`;
}

var p = new Point(1, 2);
p.toString()


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static toString() {
        return `${this.x},${this.y}`
    }
    toValue() {
        return this.x + this.y
    }
}

var p = new Point(1, 2);
p.toString()