/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            -0.5 , -0.5 , 0.5,		//0
             0.5 , -0.5 , 0.5,		//1
            -0.5 ,  0.5 , 0.5,		//2
             0.5 ,  0.5 , 0.5,		//3

            -0.5 , -0.5 , -0.5,		//4
            0.5  , -0.5 , -0.5, 	//5
            -0.5 ,  0.5 , -0.5,		//6
            0.5  ,  0.5 , -0.5		//7

			];

	this.indices = [
			//Face Frente
            0, 1, 2, 
			3, 2, 1,

			//Face Esquerda
			4,0,6,
			2,6,0,

			//Face Direita
			1,7,3,
			1,5,7,

			//Face Cima
			6,2,3,
			3,7,6,

			//Face Debaixo
			1,0,4,
			4,5,1,

			//Face Atras
			5,4,6,
			6,7,5

        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
