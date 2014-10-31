// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var g_canvas = document.getElementById("draw-area");
var g_ctx = g_canvas.getContext("2d");
var g_dt = 1.0 / 60.0;
var g_time = 0.0;

// objs
var g_objs = new ObjManager();
g_objs.init();

function resizeCanvas() {
	if ( g_canvas.width != window.innerWidth || g_canvas.height != window.innerHeight)
	{
    	g_canvas.width = window.innerWidth;
    	g_canvas.height = window.innerHeight;
    }
}

/******************/

function render()
{
	g_ctx.fillStyle="#70A4B1";
	g_ctx.fillRect(0,0, g_canvas.width, g_canvas.height);

	g_objs.update();
	g_objs.draw();
}

(function animloop(){
  requestAnimFrame(animloop);
  resizeCanvas();
  render();
  g_time += g_dt;
})();