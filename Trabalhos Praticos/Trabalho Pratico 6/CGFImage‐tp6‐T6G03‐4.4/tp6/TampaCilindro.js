/**
 * TampaCilindro
 * @constructor
 */
 function TampaCilindro(scene) {
 	CGFobject.call(this,scene);
 	
 	this.initBuffers();
 };

 TampaCilindro.prototype = Object.create(CGFobject.prototype);
 TampaCilindro.prototype.constructor = TampaCilindro;

 TampaCilindro.prototype.initBuffers = function() 
 {
  	this.vertices = [];
	var inq=2*Math.PI/12;
	var ang=0.0;
 	for(var i = 0; i < 12; i++)
 	{
 		this.vertices.push(Math.cos(ang),  Math.sin(ang), 0); //z a 1
 		ang += inq;
 	}




	//Indices
	this.indices=[];
	for(i=0;i<12-1;i++)
	{	
		if(i==12-2)
		{
			this.indices.push(0,12-1,0);
		}
		else
		{
			this.indices.push(0, i+1, i+2);

		}
	
	}



this.texCoords = [];
	
	inq=2*Math.PI/12;
	ang=0.0;
 	for(var i = 0; i < 12; i++)
 	{
 		this.texCoords.push((Math.cos(ang)/2)+0.5,  (Math.sin(ang)/2)+0.5);
 		ang += inq;
 	}



 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
