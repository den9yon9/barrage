import Node from '../../lib/canvas/node.js'
import Container from '../../lib/canvas/container'
import Sprite from '../../lib/canvas/sprite.js'
import Text from '../../lib/canvas/text.js'
import EventEmitter from 'events'
import Canvas2D from '../../lib/canvas/canvas2d.js'

Array.prototype.getSample = function () {
    return this[Math.floor(Math.random() * this.length)]
}

const bus = new EventEmitter()

class Avatar extends Sprite {
    static width = 28
    constructor(src, X) {
        const Y = 0
        const width = Avatar.width
        const height = Avatar.width
        const left = 0
        super(src, X, Y, width, height, left)
    }

    draft() {
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.arc(this.width / 2, 0, this.width / 2, 0, Math.PI * 2)
        this.ctx.stroke()
        this.ctx.clip()
        super.draft()
        this.ctx.closePath()
        this.ctx.restore()
    }
}

class Rect extends Node {
    width = 0
    height = 0
    color = 'black'
    constructor(X, Y, width, height, color) {
        super(X, Y)
        this.width = width
        this.height = height
        this.color = color
    }

    draft() {
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
        this.ctx.closePath()
        this.ctx.restore()
    }
}

class Semicircle extends Node {
    constructor(X, Y, radius, color, startAngle = 0) {
        super(X, Y)
        this.radius = radius
        this.color = color
        this.startAngle = startAngle
    }

    draft() {
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(0, 0, this.radius, this.startAngle, this.startAngle + Math.PI)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.restore()
    }
}

class Bullet extends Container {
    channel
    fired = false
    constructor(X, channel, avatarUrls, word) {
        super(X, channel * 50, 0, Avatar.width)
        this.channel = channel
        // 生成情侣头像
        const avatarSpace = 20 // 头像间距
        let avatars = avatarUrls.map((url, index) => new Avatar(url, index * avatarSpace))

        // 生成情话
        const fontSize = 14
        const textPaddingLeft = Avatar.width + avatarSpace + 10
        let text = new Text(word, fontSize, textPaddingLeft, 0)
        this.width = textPaddingLeft + text.width + Avatar.width / 2

        // 绘制长方形背景
        const rectWidth = textPaddingLeft - Avatar.width / 2 - avatarSpace + text.width
        const rectHeight = Avatar.width
        const rectX = avatarSpace + Avatar.width / 2 + rectWidth / 2
        const rectY = 0
        const rect = new Rect(rectX, rectY, rectWidth, rectHeight, 'rgba(0,0,0,0.3)')
        rect.zIndex = -1

        // 绘制半圆背景
        const semicircle = new Semicircle(rectX + rectWidth / 2 + 1, 0, Avatar.width / 2, 'rgba(0,0,0,0.3)', -Math.PI / 2)

        avatars.forEach(avatar => this.appendChild(avatar))
        this.appendChild(rect)
        this.appendChild(text)
        this.appendChild(semicircle)
    }

    fire() {
        this.animation = () => {
            this.x = this.X - this.counter
            this.counter = this.counter + 1
            this.ctx.translate(this.x, this.y)
            if (this.x < -this.width) {
                this.destroy()
            }
            if (this.fired) return
            if (this.x < this.canvas.width / window.devicePixelRatio - this.width) {
                this.fired = true
                bus.emit('fired', this.channel)
            }

        }
    }
}

export default class Shooter extends EventEmitter {
    channels = [
        { channel: 1, free: true },
        { channel: 2, free: true },
        { channel: 3, free: true },
        { channel: 4, free: true }
    ] // 弹道
    catridge = [] // 弹药箱
    canvas = Canvas2D.getInstance().canvas

    constructor() {
        super()
        bus.on('fired', channelValue => {
            let couple = this.catridge.shift()
            if (this.catridge.length < 10) this.emit('reloading')
            if (!couple) return this.emit('empty')

            // 重置弹道状态
            let channel = this.channels.find(item => item.channel === channelValue)
            channel.free = true

            // 装弹
            let bullet = new Bullet(this.canvas.width / window.devicePixelRatio, channelValue, couple.avatarUrls, couple.words)
            channel.free = false
            // 1s后发射
            setTimeout(bullet.fire.bind(bullet), 200)
        })
    }

    // 连发
    fireaway() {
        this.channels.filter(item => item.free).map(item => {
            let couple = this.catridge.shift()
            if (this.catridge.length < 10) this.emit('reloading')
            if (!couple) return this.emit('empty')
            let bullet = new Bullet(this.canvas.width / window.devicePixelRatio, item.channel, couple.avatarUrls, couple.words)
            bullet.fire()
            item.free = false
        })
    }

    // 填充弹药箱(重新取数据)
    reloading(couples) {
        this.catridge.push(...couples)
    }
}