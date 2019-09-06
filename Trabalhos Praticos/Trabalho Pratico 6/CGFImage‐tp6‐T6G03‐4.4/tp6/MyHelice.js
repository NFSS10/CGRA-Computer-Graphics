/**
 * MyHelice
 * @constructor
 */
 function MyHelice(scene) {
 	CGFobject.call(this, scene);

 	this.angulo = 0;


 	this.helice = new MyCylinder(this.scene, 5, 5);


	//this.pernaAppearance = new CGFappearance(this.scene);
	//this.pernaAppearance.loadTexture("resources/images/perna.png");
 };

 MyHelice.prototype = Object.create(CGFobject.prototype);
 MyHelice.prototype.constructor = MyHelice;

 MyHelice.prototype.display = function() {
 	
 	this.scene.pushMatrix();
 	this.scene.rotate(degToRad*this.angulo,0,1,0,1);

 	//___________________________________
 	this.scene.pushMatrix();
 	this.scene.translate(0,0,-0.5);
	this.scene.scale(0.05,0.01,1);
 	this.helice.display();
 	this.scene.popMatrix();
 	//___________________________________

 	this.scene.popMatrix();
 }

MyHelice.prototype.update = function(velocidade, antiHorario)
{
	if(!antiHorario)
  		this.angulo=this.angulo - velocidade;
  	else
  		this.angulo=this.angulo + velocidade;
};