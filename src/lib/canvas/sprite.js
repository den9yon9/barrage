import Node from './node.js';
import ImageLoader from './imageLoader.js';

export default class Sprite extends Node{
  width; // 图片宽度
  height; // 图片高度
  left; // 图片锚点距图片顶部距离
  top; // 图片锚点距离图片左边距离
  src; // 图片地址
  image;
  constructor (src, X, Y, width, height, left = width / 2, top = height ? height / 2 : undefined ) {
    super(X, Y);
    if (!src) throw new Error('image src required!');
    this.width = width;
    this.height = height;
    this.src = src;
    this.left = left;
    this.top = top;
    this.init();
  }

  async init () {
    this.image = await ImageLoader.getImage(this.src);
    // 更正height,如果构造参数中未指定高度，则根据图片宽度和宽高比例自动生成高度
    if (this.height === undefined) {
      this.height = this.width / this.image.ratio;
    }
    // 更正top,如果构造参数中未指定top，则根据图片高度生成top
    if (this.top === undefined) {
      this.top = this.height / 2;
    }
  }

  testChoosed (x, y) {
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

  // 绘制图片
  draft () {
    if (!this.image || !this.visible) return;
    let dWidth = this.width;
    let dHeight = this.height;
    let dx = -this.left;
    let dy = -this.top;
    let sx = 0;
    let sy = 0;
    let sWidth = this.image.width;
    let sHeight = this.image.height;

    this.ctx.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }
}
