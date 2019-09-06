/**
 * MyClock
 * @constructor
 */
 function MyClockHand(scene, angulo, comprimento, espessura)
 {
 	CGFobject.call(this,scene);

    this.angulo = angulo || 0;
    this.comprimento = comprimento || 0.7;
    this.espessura = espessura || 0.025;

    this.ponteiro = new MyQuad(this.scene);
 	this.ponteiro.initBuffers();

 	this.initBuffers();
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;


MyClockHand.prototype.setAngle = function(angulo)
{
 this.angulo = angulo; 
}

MyClockHand.prototype.display = function()
{
    this.scene.pushMatrix();
    this.scene.rotate(degToRad * this.angulo, 0, 0, -11);
    this.scene.translate(0, this.comprimento/2, 0);
    this.scene.scale(this.espessura, this.comprimento, 1);
 	this.ponteiro.display();
 	this.scene.popMatrix();

}