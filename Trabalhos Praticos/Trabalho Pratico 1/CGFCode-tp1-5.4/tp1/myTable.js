
function myTable(scene) {
	CGFobject.call(this,scene);
	this.table = new MyUnitCubeQuad(this.scene);
	this.table.initBuffers();
};

myTable.prototype = Object.create(CGFobject.prototype);
myTable.prototype.constructor=myTable;

myTable.prototype.display = function () {

	//tampo da mesa - 5 , 0.3 , 3
	this.scene.pushMatrix();
	this.scene.scale(5,0.3,3);
	this.table.display();
	this.scene.popMatrix();
	
	//perna da mesa - 0.3 , 3.5 , 0.3
	//perna superior esquerda
	this.scene.pushMatrix();
	this.scene.translate(-2.0,-1.9,1.1);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.popMatrix();

	//perna superior direita
	this.scene.pushMatrix();
	this.scene.translate(-2.0,-1.9,-1.1);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.popMatrix();

	//perna inferior direita
	this.scene.pushMatrix();
	this.scene.translate(2.0,-1.9,-1.1);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.popMatrix();

	//perna inferior esquerda
	this.scene.pushMatrix();
	this.scene.translate(2.0,-1.9,1.1);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.popMatrix();



}
