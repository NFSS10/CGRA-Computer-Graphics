/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks, raio) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	this.raio=raio;

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

//Vertices
 	this.vertices = [];
	var inq=2*Math.PI/this.slices;
	var ang=0.0;
 	for(var i = 0; i < this.slices; i++)
 	{

 		this.vertices.push(Math.cos(ang), Math.sin(ang), 0); //z a 0
 		this.vertices.push(Math.cos(ang),  Math.sin(ang), this.raio/this.stacks); //z a 1
 		ang += inq;
 	}

	//Indices
 	this.indices = [];
 	ang=0;
 	for(var i = 0; i < this.slices; i++)
 	{
 		if(i == this.slices-1)
 			{
 			this.indices.push(ang,0,ang+1);
 			this.indices.push(0,1,ang+1);
 		}
 		else
 		{
 		this.indices.push(ang,ang+2,ang+1);
 		this.indices.push(ang+2,ang+3,ang+1);
 		}
 		ang=ang+2;
 	}

	//Normais
 	this.normals = [];
 	ang=0.0;
 	for(var i = 0; i < this.slices; i++)
 	{
 		this.normals.push(Math.cos(ang),Math.sin(ang),0);
 		this.normals.push(Math.cos(ang),Math.sin(ang),1);
 		ang += inq
 	}





console.log(this.normals.length);
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

MyLamp.prototype.display = function() {
	this.scene.pushMatrix();

var div=1;
var adder=2*Math.PI*(1/this.stacks);
	for (var i = 0; i < this.stacks; i++)
	{

		this.drawElements(this.primitiveType);
		this.scene.translate(0, 0, 1/this.stacks);
		this.scene.scale(1/div,1/div,1/div);
		adder=2*Math.PI*(1/this.stacks)*(1/(this.stacks-i));
		div=div+Math.sin(adder);
	}

	this.scene.popMatrix();
}