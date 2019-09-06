/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	//Vertices
 	this.vertices = [];
	var inq=2*Math.PI/this.slices;
	var ang=0.0;
 	for(var i = 0; i < this.slices; i++)
 	{
 		this.vertices.push(Math.cos(ang), Math.sin(ang), 0); //z a 0
 		this.vertices.push(Math.cos(ang),  Math.sin(ang), 1/this.stacks); //z a 1
 		this.vertices.push(Math.cos(ang+inq), Math.sin(ang+inq), 0);
 		this.vertices.push(Math.cos(ang+inq), Math.sin(ang+inq), 1/this.stacks);
 		ang += inq;
 	}

	//Indices
 	this.indices = [];
 	ang=0;
 	for(var i = 0; i < this.slices; i++)
 	{
 		this.indices.push(ang,ang+2,ang+1);
 		this.indices.push(ang+2,ang+3,ang+1);
 		ang+=4;
 	}

	//Normais
 	this.normals = [];
 	ang=0.0;
 	for(var i = 0; i < this.slices; i++)
 	{
 		this.normals.push(Math.cos(ang)/2,Math.sin(ang)/2,0);
 		this.normals.push(Math.cos(ang)/2,Math.sin(ang)/2,0);
 		this.normals.push(Math.cos(ang)/2,Math.sin(ang)/2,0);
 		this.normals.push(Math.cos(ang)/2,Math.sin(ang)/2,0);
 		ang += inq
 	}


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

MyPrism.prototype.display = function()
{
	this.scene.pushMatrix();

	for (var i = 0; i < this.stacks; i++) {
		this.drawElements(this.primitiveType);
		this.scene.translate(0, 0, 1/this.stacks);
	}

	this.scene.popMatrix();
}