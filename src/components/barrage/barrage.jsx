import React, { Component } from 'react'
import Canvas2D from '../../lib/canvas/canvas2d'

export default class Barrage extends Component {
    componentDidMount() {
        const {width, height} = this.props
        const canvas2d = new Canvas2D('#canvas', width, height)
        canvas2d.loopCanvas()
    }
    render() {
        return <canvas id="canvas"></canvas>
    }
}