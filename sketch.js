const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.arc(width / 2, height / 2, 200, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
  };
};

canvasSketch(sketch, settings);
