function Terrain()
{
	BaseObj.call(this);

	this.init = function()
	{
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		var cube = new THREE.Mesh( geometry, material );
		scene.add( cube );
	};

	this.update = function()
	{
	};

	this.draw = function()
	{
		//var screenWidth = g_canvas.width;
		//var screenHeight = g_canvas.height;

		//g_ctx.fillStyle = "red";
		//g_ctx.fillRect(0,0, screenWidth*0.5, screenHeight*0.5);

		/*g_ctx.fillStyle = '#74CED9';
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