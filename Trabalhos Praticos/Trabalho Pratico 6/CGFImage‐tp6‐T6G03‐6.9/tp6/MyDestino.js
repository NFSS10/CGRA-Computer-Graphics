/**
 * MyDestino
 * @constructor
 */
 function MyDestino(scene)
  {
 	CGFobject.call(this,scene);
	
	this.pX = 13.5;
	this.pY = 3.75;
    this.pZ = 8;
    this.pousado = false;


	this.legBase = new MyUnitCubeQuad(this.scene);
 	this.landingZone = new MyCylinder(this.scene, 12, 1);

 	this.topOfLandingZone = new TampaCilindro(this.scene);
 	this.topOfLandingZone.initBuffers();

	this.base_tex = new CGFappearance(this.scene);
	this.base_tex.setDiffuse(0.8,0.8,0.8,1);
	this.base_tex.setSpecular(0.2,0.2,0.2,1);
	this.base_tex.setShininess(10);
	this.base_tex.loadTexture("resources/images/destino.png");
	
	this.pernas_tex = new CGFappearance(this.scene);
	this.pernas_tex.setDiffuse(0.8,0.8,0.8,1);
	this.pernas_tex.setSpecular(0.2,0.2,0.2,1);
	this.pernas_tex.setShininess(10);
	this.pernas_tex.loadTexture("resources/images/perna.png");

 };

 MyDestino.prototype = Object.create(CGFobject.prototype);
 MyDestino.prototype.constructor = MyDestino;


MyDestino.prototype.display = function() 
{
	this.scene.pushMatrix();
	this.scene.translate(this.pX, this.pY, this.pZ);

	//Legbase1
 	this.scene.pushMatrix();	
 	this.scene.translate(0.5,0,0);
 	this.scene.scale(0.1,0.1,1.7);
	this.pernas_tex.apply();
	this.legBase.display();
	this.scene.popMatrix();
  
	//Legbase2
 	this.scene.pushMatrix();	
 	this.scene.translate(-0.5,0,0);
	this.scene.scale(0.1,0.1,1.7);
	this.pernas_tex.apply();
	this.legBase.display();
	this.scene.popMatrix();
  
	//LegHolder1
    this.scene.pushMatrix();	
 	this.scene.translate(0.5,0.2,0);
 	this.scene.rotate(degToRad * 90, 1, 0, 0);	
	this.scene.scale(0.1,0.1,0.3);
	this.pernas_tex.apply();
	this.legBase.display();
	this.scene.popMatrix();
  
	//LegHolder2
    this.scene.pushMatrix();	
 	this.scene.translate(-0.5,0.2,0);
 	this.scene.rotate(degToRad * 90, 1, 0, 0);	
	this.scene.scale(0.1,0.1,0.3);
	this.pernas_tex.apply();
	this.legBase.display();
	this.scene.popMatrix();
  
	//LandingZone
	 this.scene.pushMatrix();
	 this.scene.translate(0,0.4,0);
 	 this.scene.rotate(degToRad * 90, 1, 0, 0);	
 	 this.scene.scale(0.8, 0.8, 0.2);
 	 this.pernas_tex.apply();
 	 this.landingZone.display();
 	 this.scene.popMatrix();
	
	//TopOfLandingZone
	 this.scene.pushMatrix();
	 this.scene.translate(0,0.4,0);
	 this.scene.rotate(degToRad * -90, 1, 0, 0);
	 this.scene.scale(0.8, 0.8, 0.2);
	 this.base_tex.apply();
	 this.topOfLandingZone.display();
	 this.scene.popMatrix();

	this.scene.popMatrix();
};
