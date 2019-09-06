/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyObject(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyObject.prototype = Object.create(CGFobject.prototype);
MyObject.prototype.constructor=MyObject;

MyObject.prototype.initBuffers = function () {
	this.vertices = [
            -0.5, -0.5, 0, 
            0.5, -0.5, 0,
            -0.5, 0.5, 0,
            0.5, 0.5, 0,
            
            //3 pontos do telhado
            -1.0, 0.5, 0, //4
             1.0, 0.5, 0, //5
             0.0, 1.5 ,0 //6
			];

	this.indices = [
            0, 1, 2, 
			3, 2, 1,

			4, 5, 6 //vertices do telhado
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
