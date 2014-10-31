function ObjManager()
{
	this.init = function()
	{
		this.objs = 
		{
			terrain:new Terrain(),
			//sun: new Sun(),
			//shadow:new MascotShadow(),
			//body:new MascotBody(),
			//head:new MascotHead(),
		};

		for (var property in this.objs ) {
		    if (this.objs.hasOwnProperty(property)) {
		        
		        var obj = this.objs[property];
		        obj.init();
		    }
		}
	}

	this.update = function()
	{
		for (var property in this.objs ) {
		    if (this.objs.hasOwnProperty(property)) {
		        
		        var obj = this.objs[property];

		        if (  'update' in obj ) {
		        	obj.update();
		        }
		    }
		}
	}

	this.draw = function()
	{
		for (var property in this.objs ) {
		    if (this.objs.hasOwnProperty(property)) {
		        
		        var obj = this.objs[property];

		        if (  'draw' in obj && obj.visible ) {
		        	obj.draw();
		        }
		    }
		}
	}

	this.get = function( a_name )
	{
		return this.objs[a_name];
	}
}