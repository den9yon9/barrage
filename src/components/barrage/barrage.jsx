import React, { Component } from 'react'
import Canvas2D from '../../lib/canvas/canvas2d'
import Shooter from './shooter.js'
const icon1 = 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg'
const icon2 = 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'
const couples = [
    {
        avatarUrls: [icon1, icon2],
        words: '1'
    },
    {
        avatarUrls: [icon1, icon2],
        words: '22'
    },
    {
        avatarUrls: [icon1, icon2],
        words: '333'
    },
    {
        avatarUrls: [icon1, icon2],
        words: '4444'
    },
    {
        avatarUrls: [icon1, icon2],
        words: '55555'
    }, {
        avatarUrls: [icon1, icon2],
        words: '666666'
    }, {
        avatarUrls: [icon1, icon2],
        words: '7777777'
    }, {
        avatarUrls: [icon1, icon2],
        words: '88888888'
    }, {
        avatarUrls: [icon1, icon2],
        words: '999999999'
    }, {
        avatarUrls: [icon1, icon2],
        words: 'aaaaaaaaaa'
    }, {
        avatarUrls: [icon1, icon2],
        words: 'bbbbbbbbbbb'
    }, {
        avatarUrls: [icon1, icon2],
        words: 'cccccccccccc'
    }, {
        avatarUrls: [icon1, icon2],
        words: 'ddddddddddddd'
    }, {
        avatarUrls: [icon1, icon2],
        words: 'eeeeeeeeeeeeee'
    }, {
        avatarUrls: [icon1, icon2],
        words: 'fffffffffffffff'
    }, {
        avatarUrls: [icon1, icon2],
        words: 'ggggggggggggggggg'
    },
]

export default class Barrage extends Component {
    componentDidMount() {
        const { width, height } = this.props
        const canvas2d = new Canvas2D('#canvas', width, height)
        canvas2d.loopCanvas()

        const shooter = new Shooter()
        shooter.reload(couples)

        shooter.fireaway()

        shooter.on('empty', () => {
            console.log('empty')
            shooter.reload(couples)
            // shooter.fireaway()
        })
    }
    render() {
        return <canvas id="canvas"></canvas>
    }
}