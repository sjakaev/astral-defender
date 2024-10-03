class Background {
  image: HTMLImageElement;
  loaded = false;

  constructor(imagePath: string) {
    this.image = new Image();
    this.image.src = imagePath;
    this.image.onload = () => {
      this.loaded = true;
    };
    this.image.onerror = () => {
      console.error(`Failed to load background image: ${imagePath}`);
    };
  }

  draw(ctx: CanvasRenderingContext2D, cameraX: number, cameraY: number, canvasWidth: number, canvasHeight: number) {
    if (!this.loaded) return

    const bgWidth = this.image.width
    const bgHeight = this.image.height

    const startX = - (cameraX % bgWidth) - bgWidth
    const startY = - (cameraY % bgHeight) - bgHeight

    for (let x = startX; x < canvasWidth + bgWidth; x += bgWidth) {
      for (let y = startY; y < canvasHeight + bgHeight; y += bgHeight) {
        ctx.drawImage(this.image, x, y, bgWidth, bgHeight)
      }
    }
  }
}
export default Background;
