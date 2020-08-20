import Node from './node.js'

export default class Text extends Node {
    font
    textAlign
    textBaseline
    constructor(text, fontSize, X, Y, textAlign = 'left', textBaseline = 'middle') {
        super(X, Y)
        this.text = text
        this.font = `${fontSize}px sans-serif`
        this.textAlign = textAlign
        this.textBaseline = textBaseline
    }

    get width() {
        this.ctx.save()
        this.ctx.font = this.font
        let { width } = this.ctx.measureText(this.text)
        this.ctx.restore()
        return width
    }

    draft() {
        this.ctx.save()
        this.ctx.font = this.font
        this.ctx.textAlign = this.textAlign
        this.ctx.textBaseline = this.textBaseline
        this.ctx.fillText(this.text, 0, 0)
        this.ctx.restore()
    }
}