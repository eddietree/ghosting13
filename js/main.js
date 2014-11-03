var scene;
var camera;
var renderer;
var canvas;
var g_objs;
var g_profiles;
var g_dt = 1.0 / 60.0;
var g_time = 0.0;

function resize() {
	var width = canvas.clientWidth;
	var height = canvas.clientHeight;
	if ( canvas.width != width || canvas.height != height )
	{
		renderer.setSize( canvas.clientWidth, canvas.clientHeight, false);
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();
	}
}


$(function() {

	renderer = new THREE.WebGLRenderer();
	canvas = renderer.domElement;
	document.body.appendChild( canvas );
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000 );
	camera.position.z = 5;

	resize();
	renderer.setClearColor( 0xffffff, 1);

	// objs
	g_objs = new ObjManager();
	g_objs.init();

	g_profiles = new ProfileManager();
	g_profiles.init();
	g_profiles.loadProfile(1);

	var stats = new Stats();
	stats.setMode(1); // 0: fps, 1: ms

	// align top-left
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.right = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild( stats.domElement );

	(function animloop(){
	  stats.begin();
	  render();
	  g_time += g_dt;
	  stats.end();

	  requestAnimationFrame(animloop);
	})();
});

function render()
{
	resize();
	renderer.render( scene, camera );

	g_objs.update();
	g_objs.draw();
}
