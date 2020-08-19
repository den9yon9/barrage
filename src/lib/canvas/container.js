import Node from './node.js'

export default class Container extends Node {
    width
    height
    left
    top
    children = []
    constructor(X, Y, width = 0, height = 0, left = width / 2, top = height / 2) {
        super(X, Y)
        this.width = width
        this.height = height
        this.left = left
        this.top = top
    }

    appendChild(child) {
        if (!this.children.includes(child)) {
            child.X += this.X
            child.Y += this.Y
            this.children.push(child)
        }
    }

    removeChild(child) {
        let index = this.children.findIndex(item => item === child)
        if (index > -1) {
            this.children.splice(index, 1)
            child.X -= this.X
            child.Y -= this.Y
        }
    }

    testChoosed(x, y) {
        let { width, height, left, top } = this;
        let right = width - left;
        let bottom = height - top;
        let x1 = this.x - left;
        let x2 = this.x + right;
        let y1 = this.y - top;
        let y2 = this.y + bottom;
        let hasChoosed = x1 < x && x < x2 && y1 < y && y < y2;
        return hasChoosed;
    }

    draft() {
        this.ctx.strokeStyle = 'red'
        this.ctx.rect(-this.left, -this.top, this.width, this.height)
        this.ctx.stroke()
    }
}
