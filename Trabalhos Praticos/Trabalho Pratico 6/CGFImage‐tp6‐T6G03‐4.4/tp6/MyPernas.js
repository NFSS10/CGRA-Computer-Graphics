/**
 * MyPernas
 * @constructor
 */
 function MyPernas(scene, slices) {
 	CGFobject.call(this,scene);

    this.slices = slices;

	this.initBuffers();
 };

 MyPernas.prototype = Object.create(CGFobject.prototype);
 MyPernas.prototype.constructor = MyPernas;



MyPernas.prototype.initBuffers = function () 
{
	this.vertices = [];
 	this.normals = [];
 	this.indices = [];
 	this.texCoords = [];

 	var lx = 1 / this.slices;
 	var ly = 1;
 	var tX =0;
 	var tY =0;
    var x,y;
    var i, j;
	for(i = 0; i <= 2; i++)
	{
		for(j = -this.slices; j < this.slices; j++) 
		{
		    x=j*(1/this.slices);
		    y=x*x;
			this.vertices.push(x,y ,i * 0.1);
			this.normals.push(x,y,0);
			this.texCoords.push(tX, tY);
			tX += lx;
		}
		tX = 0;
		tY += ly;
	}
		
	for(i = 0; i < 2; i++) 
	{
		for(j = 0; j < this.slices - 2; j++)
		 {
			this.indices.push(i*2*this.slices + j, i*2*this.slices + j+1, (i+1)*2*this.slices + j);
			this.indices.push(i*2*this.slices + j+1, (i+1)*2*this.slices + j+1, (i+1)*2*this.slices + j);

			this.indices.push(i*2*this.slices + j+1, i*2*this.slices + j, (i+1)*2*this.slices + j);
			this.indices.push((i+1)*2*this.slices + j+1, i*2*this.slices + j+1, (i+1)*2*this.slices + j);
		}
	}


		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};