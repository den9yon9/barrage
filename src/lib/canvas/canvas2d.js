export default class Canvas2D {
  static instance;
  static getInstance() {
    if (!this.instance) throw new Error('请先初始化canvas');
    return this.instance;
  }

  ratio = window.devicePixelRatio
  requestId = null;
  canvas;
  ctx;
  nodes = [];

  constructor(canvasSelector, width = window.innerWidth, height = window.innerHeight) {
    if (Canvas2D.instance) throw new Error('请勿重复创建实例');
    this.canvas = document.querySelector(canvasSelector);
    this.ctx = this.canvas.getContext('2d');

    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.canvas.width = width * this.ratio;
    this.canvas.height = height * this.ratio;
    Canvas2D.instance = this;
  }

  loopCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save()
    this.ctx.scale(this.ratio, this.ratio);
    this.drawCanvas();
    this.ctx.restore()
    this.requestId = window.requestAnimationFrame(this.loopCanvas.bind(this));
  }

  drawCanvas() {
    this.nodes.sort((a,b)=>a.zIndex-b.zIndex).forEach(node => node.draw());
  }

  cancelLoopCanvas() {
    cancelAnimationFrame(this.requestId);
  }
}
