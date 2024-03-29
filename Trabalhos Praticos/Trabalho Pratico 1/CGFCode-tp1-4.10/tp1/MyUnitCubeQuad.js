/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);
	this.quad = new MyQuad(this.scene);
	this.quad.initBuffers();
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

MyUnitCubeQuad.prototype.display = function () 
{
	
	//Frente
	this.scene.pushMatrix()
		this.scene.translate(0,0,0.5);
		this.quad.display();
	this.scene.popMatrix();

	//Atras
	this.scene.pushMatrix()
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(Math.PI,1,0,0);
		this.quad.display();
	this.scene.popMatrix();

	//Direito
	this.scene.pushMatrix()
		this.scene.translate(0.5,0,0);
		this.scene.rotate((Math.PI/2),0,1,0);
		this.quad.display();
	this.scene.popMatrix();

	//Esquerda
	this.scene.pushMatrix()
		this.scene.translate(-0.5,0,0);
		this.scene.rotate(-(Math.PI/2),0,1,0);
		this.quad.display();
	this.scene.popMatrix();

	//Cima
	this.scene.pushMatrix()
		this.scene.translate(0,-0.5,0);
		this.scene.rotate((Math.PI/2),1,0,0);
		this.quad.display();
	this.scene.popMatrix();

	//Baixo
	this.scene.pushMatrix()
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-(Math.PI/2),1,0,0);
		this.quad.display();
	this.scene.popMatrix();
}



