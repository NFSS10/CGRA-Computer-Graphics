/**
 * MyDrone
 * @constructor
 */
 function MyDrone(scene) {
 	CGFobject.call(this,scene);


 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	//Vertices
 	this.vertices = [
 	0.5, 0.3, 0,
 	-0.5, 0.3, 0,
 	0.0, 0.3, 2
 	];
 		
	//Indices
 	this.indices = [
	0,1,2,
	2,1,0
 	];



 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

MyDrone.prototype.display = function() 
{
	this.scene.pushMatrix();
	this.scene.translate(8,5,8.5);
	this.scene.rotate(degToRad*20,0,1,0,1);
	this.scene.scale(1,1,-1);
	this.drawElements(this.primitiveType);
	this.scene.popMatrix();
};