
function myFloor(scene) {
	CGFobject.call(this,scene);
	this.floor = new MyUnitCubeQuad(this.scene);
	this.floor.initBuffers();
};

myFloor.prototype = Object.create(CGFobject.prototype);
myFloor.prototype.constructor=myFloor;

myFloor.prototype.display = function () {

	//dimen do chao - 8 , 0.1 , 6
	this.scene.pushMatrix()
		this.scene.scale(8,0.1,6);
		this.floor.display();
	this.scene.popMatrix();
	
}
