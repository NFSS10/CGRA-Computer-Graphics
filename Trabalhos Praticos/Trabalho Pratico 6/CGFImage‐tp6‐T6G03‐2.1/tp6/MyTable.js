/**
 * MyTable
 * @constructor
 */
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	this.tableAppearance = new CGFappearance(this.scene);
	this.tableAppearance.loadTexture("resources/images/table.png");

	this.pernaAppearance = new CGFappearance(this.scene);
	this.pernaAppearance.loadTexture("resources/images/perna.png");
 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {
 	// legs
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.pernaAppearance.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
 	this.tableAppearance.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }
