/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);

    this.cilindro = new MyCylinder(this.scene, 12, 1);
 	this.cilindro.initBuffers();

 	this.tampa = new TampaCilindro(this.scene);
 	this.tampa.initBuffers();

    this.ponteiroM = new  MyClockHand(this.scene, 0, 0.7, 0.035)
    this.ponteiroM.initBuffers();

    this.ponteiroS = new  MyClockHand(this.scene, 0, 0.75, 0.025)
    this.ponteiroS.initBuffers();

    this.ponteiroH = new  MyClockHand(this.scene, 0, 0.5, 0.04)
    this.ponteiroH.initBuffers();

    this.ponteiroH.setAngle(90);
    this.ponteiroM.setAngle(180);
    this.ponteiroS.setAngle(270);

 	this.initBuffers();
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;





MyClock.prototype.display = function()
{
    //cilindro
    this.scene.pushMatrix();
    this.scene.scale(1, 1, 0.2);
 	this.cilindro.display();
 	this.scene.popMatrix();

    //tampa
    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.2);
 	this.tampa.display();
 	this.scene.popMatrix();


    //Ponteiros
    this.scene.pushMatrix();
    this.scene.translate(0,0, 0.22);
 	this.ponteiroH.display();
 	this.scene.popMatrix();

    //Ponteiros
    this.scene.pushMatrix();
    this.scene.translate(0,0, 0.22);
 	this.ponteiroM.display();
 	this.scene.popMatrix();

 	//Ponteiros
    this.scene.pushMatrix();
    this.scene.translate(0,0, 0.22);
 	this.ponteiroS.display();
 	this.scene.popMatrix();
};

MyClock.prototype.update = function(currTime)
{
   this.ponteiroH.setAngle(this.ponteiroH.angulo + ((currTime*360)/(24*60*60*1000)) );
   this.ponteiroM.setAngle(this.ponteiroM.angulo + ((currTime*360)/(60*60*1000)) );
   this.ponteiroS.setAngle(this.ponteiroS.angulo + ( (currTime*360)/(60*1000)) );
};