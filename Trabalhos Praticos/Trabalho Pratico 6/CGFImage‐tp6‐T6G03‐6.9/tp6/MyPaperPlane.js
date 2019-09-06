
function MyPaperPlane(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();


	this.aviaox = 10;
	this.aviaoy = 3.5;
	this.aviaoang=0;
	this.aviaoestado=0;


};

MyPaperPlane.prototype = Object.create(CGFobject.prototype);
MyPaperPlane.prototype.constructor=MyPaperPlane;

MyPaperPlane.prototype.initBuffers = function () {
	this.vertices = [
		0, 0.5, 0,
		1, 0.0 ,0,
		1, 0.5, 0,
		
		1, 0.5, -0.5,
		1, 0.5, 0.5
			];

	this.indices = [
            0, 1, 2, 
			2, 1, 0,

			0 ,3 ,4,
			4, 3, 0
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};

MyPaperPlane.prototype.update = function(acao)
{
	if(acao==1)
	{
		this.aviaox = this.aviaox - 0.4;
		if(this.aviaox<0)
		{
			this.aviaoestado=1;
		}
		this.aviaoy = this.aviaoy + 0.1;
	}
	else
	{
		this.aviaoang=90;
		this.aviaox=0.5;
		if(this.aviaoy > 0)
		{
			this.aviaoy = this.aviaoy - 0.5;
		}
	}


};
