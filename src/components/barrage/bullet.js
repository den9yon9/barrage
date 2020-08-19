import Container from '../../lib/canvas/container'
import Sprite from '../../lib/canvas/sprite.js'
import Text from '../../lib/canvas/text.js'

class Avatar extends Sprite {
    static width = 50
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
        this.ctx.restore()
    }
}

export default class Bullet extends Container {
    constructor(X, Y, avatarUrls, word) {
        super(X, Y)

        // 生成情侣头像
        const avatarSpace = 20 // 头像间距
        let avatars = avatarUrls.map((url, index) => new Avatar(url, index * avatarSpace))

        // 生成情话
        const fontSize = 20
        const textPaddingLeft = Avatar.width + avatarSpace + 10
        let text = new Text(word, fontSize, textPaddingLeft, 0)

        avatars.forEach(avatar => this.appendChild(avatar))
        this.appendChild(text)

    }
}