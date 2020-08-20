import Canvas2D from './canvas2d.js';
import EventEmitter from 'events'

// 注意canvas纵轴正方向向下
export default class Node extends EventEmitter{
  static _instance;
  static async getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }
  static destroy() {
    this._instance = null;
  }

  counter = 0;
  zIndex = 0;
  visible = true;

  x = 0; // Sprite绝对横坐标(相对于canvas顶点)
  y = 0; // Sprite绝对纵坐标(相对于canvas顶点)

  X; // Sprite相对横坐标(相对于父级锚点)
  Y; // Sprite相对纵坐标(相对于父级锚点)
  canvas2d = Canvas2D.getInstance();
  ctx = this.canvas2d.ctx;
  canvas = this.canvas2d.canvas;

  constructor(X = 0, Y = 0) {
    super()
    this.X = X;
    this.Y = Y;

    this.x = X;
    this.y = Y;

    this.canvas2d.nodes.push(this);
    this.canvas2d.nodes.sort((a, b) => a.zIndex - b.zIndex);
  }

  testChoosed(x, y) {
    throw new Error('子类需实现此方法');
  }

  resetAnimation() {
    this._animation = () => {
      let { X, Y } = this;
      this.x = X;
      this.y = Y;
      this.ctx.translate(this.x, this.y);
      this.counter = 0;
    };
    this._isAnimation = false;
  }

  _animation() {
    this.ctx.translate(this.x, this.y)
  }; // 动画函数

  set animation(animation) {
    this._animation = animation;
    this._isAnimation = true;
  }
  get animation() {
    return this._animation;
  }

  _isAnimation = false; // 是否正在动画中
  get isAnimation() {
    return this._isAnimation;
  }
  set isAnimation(value) {
    this._isAnimation = value;
  }

  // 如果将Sprite作为容器使用,将子Sprite的draw方法写在draft内,即可使子Sprite相对于容器Sprite定位
  draft() {
    throw new Error(`子类需实现此方法`);
  }

  draw() {
    if (!this.visible) return;
    this.ctx.save();
    this.animation();
    this.draft();
    this.ctx.restore();
  }
}
