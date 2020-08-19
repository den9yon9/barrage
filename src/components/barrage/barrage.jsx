import React, { Component } from 'react'
import Canvas2D from '../../lib/canvas/canvas2d'
import Bullet from './bullet.js'

export default class Barrage extends Component {
    componentDidMount() {
        const { width, height } = this.props
        const canvas2d = new Canvas2D('#canvas', width, height)
        let bullet = new Bullet(100, 100, ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'], 'nihaoa ')
        canvas2d.loopCanvas()
    }
    render() {
        return <canvas id="canvas"></canvas>
    }
}