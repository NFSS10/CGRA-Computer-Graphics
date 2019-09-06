/**
 * MyDrone
 * @constructor
 */
 function MyDrone(scene, angulo, pX, pY, pZ)
  {
 	CGFobject.call(this,scene);

	this.angulo = angulo || 200;
    this.pX = pX || 8;
    this.pY = pY || 5;
    this.pZ = pZ || 8.5;


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
	this.scene.translate(this.pX,this.pY,this.pZ);
	this.scene.rotate(degToRad*this.angulo,0,1,0,1);
	this.drawElements(this.primitiveType);
	this.scene.popMatrix();
};

MyDrone.prototype.turnLeft = function() 
{
	this.angulo=this.angulo+20;
};

MyDrone.prototype.turnRight = function() 
{
	this.angulo=this.angulo-20;
};

MyDrone.prototype.ascend = function() 
{
	this.pY=this.pY+0.2;
};

MyDrone.prototype.descend = function() 
{
	this.pY=this.pY-0.2;
};


MyDrone.prototype.goForward = function() 
{
	this.pX=this.pX+Math.sin(degToRad*this.angulo);
	this.pZ=this.pZ+Math.cos(degToRad*this.angulo);
};

MyDrone.prototype.goBackwards = function() 
{
	this.pX=this.pX-Math.sin(degToRad*this.angulo);
	this.pZ=this.pZ-Math.cos(degToRad*this.angulo);
};