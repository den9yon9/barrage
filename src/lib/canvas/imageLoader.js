export default class ImageLoader {
  static async getImage (src) {
    if (!src) throw new Error('需要src参数');
    const image = new Image();
    return new Promise((resolve, reject) => {
      image.onload = function () {
        image.ratio = image.width / image.height;
        resolve(image);
      };
      image.onerror = function (err) {
        reject(`image load err: ${err}`);
      };
      image.src = src;
    });
  }
}
