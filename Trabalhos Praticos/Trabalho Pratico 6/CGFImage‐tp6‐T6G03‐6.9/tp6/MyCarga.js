/**
 * MyCarga
 * @constructor
 */
 function MyCarga(scene)
  {
 	CGFobject.call(this,scene);
	
	this.pX = 5;
	this.pY = 0.25;
    this.pZ = 3;
    this.transportada = false;

	this.carga = new MyUnitCubeQuad(this.scene);

	//____________________ TEXTURAS  ___________________________
	this.carga_tex =new CGFappearance(this.scene);
	this.carga_tex.setDiffuse(0.5,0.5,0.5,1);
	this.carga_tex.setSpecular(0.9,0.9,0.9,1);
	this.carga_tex.setShininess(1000);
	this.carga_tex.loadTexture("resources/images/gold.png");

 };

 MyCarga.prototype = Object.create(CGFobject.prototype);
 MyCarga.prototype.constructor = MyCarga;


MyCarga.prototype.display = function() 
{
	this.scene.pushMatrix();
	this.scene.translate(this.pX,this.pY,this.pZ);
	this.scene.scale(1.5,0.5,0.7);
	this.carga_tex.apply();
	this.carga.display();
	this.scene.popMatrix();
};
