function Terrain()
{
	BaseObj.call(this);

	this.init = function()
	{
		
	};

	this.update = function()
	{
	};

	this.draw = function()
	{
/*		var screenWidth = g_canvas.width;
		var screenHeight = g_canvas.height;

		var numPts = this.numPts;
		var deltaX = screenWidth / numPts;
		var heightBase = screenHeight * 0.3;
		var time = g_time * 0.5;

		g_ctx.fillStyle = '#74CED9';
		g_ctx.strokeStyle = 'white';
		g_ctx.lineWidth = 7;
		g_ctx.beginPath();
		g_ctx.moveTo( screenWidth, screenHeight );
		g_ctx.lineTo( 0, screenHeight );

		for ( var i = 0; i < numPts; i+=1 )
		{
			var pt = this.pts[i];
			g_ctx.lineTo(pt.x, pt.y);
		}

		g_ctx.closePath();
		g_ctx.fill();
		g_ctx.stroke();

		// draw line
		g_ctx.beginPath();
		g_ctx.moveTo( this.pts[0].x, this.pts[0].y );
		for ( var i = 0; i < numPts; i+=1 )
		{
			var pt = this.pts[i];
			g_ctx.lineTo(pt.x, pt.y+17.0);
		}
		g_ctx.stroke();
		g_ctx.lineWidth = 1;*/
	};
}