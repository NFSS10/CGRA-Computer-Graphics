/**
 * MyGancho
 * @constructor
 */
 function MyGancho(scene)
  {
 	CGFobject.call(this,scene);

    this.pZ = 0.3;
    this.carregar = false;

 
 
	
	this.cilindro = new MyCylinder(this.scene,3,1);

	this.base = new MyLamp(this.scene, 100, 100);



	//____________________ TEXTURAS  ___________________________
	this.base_tex =new CGFappearance(this.scene);
	this.base_tex.setDiffuse(0.9,0.9,0.9,1);
	this.base_tex.setSpecular(0.8,0.8,0.8,1);
	this.base_tex.setShininess(100);
	this.base_tex.loadTexture("resources/images/carregar.png");

	this.cil_tex =new CGFappearance(this.scene);
	this.cil_tex.setDiffuse(0.9,0.9,0.9,1);
	this.cil_tex.setSpecular(0.8,0.8,0.8,1);
	this.cil_tex.setShininess(100);
	this.cil_tex.loadTexture("resources/images/gancho.png");
	//__________________________________________________________
 };

 MyGancho.prototype = Object.create(CGFobject.prototype);
 MyGancho.prototype.constructor = MyGancho;


MyGancho.prototype.display = function() 
{
	//Cilindro
	this.scene.pushMatrix();	
	this.scene.rotate(degToRad * 90, 1, 0, 0);	
	this.scene.scale(0.1,0.1,this.pZ);
	this.cil_tex.apply();
	this.cilindro.display();
	this.scene.popMatrix();

	//Base
	this.scene.pushMatrix();
	this.scene.translate(0,-this.pZ-0.2,0);
	this.scene.rotate(degToRad * -90,1,0,0);
	this.scene.scale(0.2,0.2,0.2);
	if(this.carregar)
		this.base_tex.apply();
	else
		this.cil_tex.apply();
	this.base.display();
	this.scene.popMatrix();	
};

MyGancho.prototype.ascend = function() 
{
	if(this.pZ>0.3)
		this.pZ = this.pZ - 0.1;
};


MyGancho.prototype.descend = function() 
{
	this.pZ = this.pZ + 0.1;
};

MyGancho.prototype.setCarregar = function(bool) 
{
	this.carregar = bool;
};