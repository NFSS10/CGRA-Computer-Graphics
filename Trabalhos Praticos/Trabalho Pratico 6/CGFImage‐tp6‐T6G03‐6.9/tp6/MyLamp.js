/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	this.vertices = [];
	this.texCoords = [];
	this.normals = [];


	var inq=2*Math.PI/this.slices;
	var ang=0.0;
	var ang_alt = (Math.PI / 2)/this.stacks;
	var x,y,z;
	for (var i = 0; i <= this.stacks; i++)
	{
		ang=0.0;
		for (var j = 0; j <= this.slices; j++)
		{
			x=Math.cos(j*inq) * Math.cos(i * ang_alt);
			y=Math.sin(j*inq) * Math.cos(i * ang_alt);
			z= Math.sin(i * ang_alt);
			this.vertices.push(x, y, z);
			this.normals.push(x, y, z);

			this.texCoords.push(x*0.5+0.5, y*0.5+0.5);
			
			ang += inq;
		}

	}

	//Indices
	this.indices = [];
	var n = this.slices + 1;
	for (var stack = 0; stack < this.stacks - 1; stack++)
	{
		for (var slice = 0; slice < this.slices; slice++)
		{
			x = stack * n + slice;
			this.indices.push(x, stack * n + ((slice + 1) % n), (stack + 1) * n + ((slice + 1) % n));
			this.indices.push(x, (stack + 1) * n + ((slice + 1) % n), (stack + 1) * n + slice);
		}
	}



 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
