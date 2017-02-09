import { pageOffsetY } from '../../utils/dom';

export default (canvas, loop) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  let offsetY = 0;

  // Animation
  let animation;
  let animating;
  function start() { animating = true; animation = window.requestAnimationFrame(looper); }
  function stop() { animating = false; window.cancelAnimationFrame(animation); }
  function running() { return animating; }
  function clearCanvas() { ctx.clearRect(0, -offsetY, canvas.width, canvas.height); }
  function looper() {
    animation = window.requestAnimationFrame(looper);
    clearCanvas()
    loop(ctx)
  }

  const handleScroll = () => {
    ctx.translate(0, -offsetY);
    offsetY = -pageOffsetY();
    ctx.translate(0, offsetY);
  }

  window.addEventListener('scroll', handleScroll)

  return { ctx, start, stop, running };
}
