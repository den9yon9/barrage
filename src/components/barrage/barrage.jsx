import React, { Component } from 'react'
import Canvas2D from '../../lib/canvas/canvas2d'
import Shooter from './shooter.js'

export default class Barrage extends Component {
    componentDidMount() {
        const { width, height } = this.props
        const canvas2d = new Canvas2D('#canvas', width, height)
        // let bullet = new Bullet(canvas2d.canvas.width/window.devicePixelRatio, 100, [], '遇见你是我的缘')
        // bullet.fire()
        canvas2d.loopCanvas()

        const shooter = new Shooter()
        shooter.reload([
            {
                avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                words: '我爱你'
            },
            {
                avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                words: '爱着你我爱你'
            },
            {
                avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                words: '爱着你我爱你爱着你'
            },
            {
                avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                words: '爱着你我爱你爱着你我爱你'
            },
            {
                avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                words: ',爱着你我爱你爱着你爱着你我爱你爱着你'
            }, {
                avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                words: '爱着你爱着你我爱你,爱着你爱着你我爱你,爱着你'
            },

        ])

        shooter.fireaway()

        shooter.on('empty', () => {
            shooter.reload([
                {
                    avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                    words: '我爱你'
                },
                {
                    avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                    words: '爱着你我爱你'
                },
                {
                    avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                    words: '爱着你我爱你爱着你'
                },
                {
                    avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                    words: '爱着你我爱你爱着你我爱你'
                },
                {
                    avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                    words: ',爱着你我爱你爱着你爱着你我爱你爱着你'
                }, {
                    avatarUrls: ['https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3757239321,1175359126&fm=26&gp=0.jpg', 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3140403455,2984550794&fm=26&gp=0.jpg'],
                    words: '爱着你爱着你我爱你,爱着你爱着你我爱你,爱着你'
                },

            ])
        })
    }
    render() {
        return <canvas id="canvas"></canvas>
    }
}