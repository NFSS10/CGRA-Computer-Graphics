var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 100;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	//Texturas
	this.Texturas = 0;

	//speed
	this.speed=1;

	//Checkboxes Luzes
	this.luz1=true;
	this.luz2=true;
	this.luz3=true;
	this.luz4=true;
	this.luz5=true;

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);
	this.floor = new MyQuad(this,0,10,0,12);
	this.leftwall = new MyQuad(this,-0.5,1.5,-0.5,1.5);

	this.cylinder = new MyCylinder(this, 8, 20);
	this.relogio = new MyClock(this);
	this.ponteiro = new MyClockHand(this);

	//Aviao
	this.aviao = new MyPaperPlane(this);

	//_____________________________________________
	//Drone
	this.drone = new MyDrone(this,0,0,0,0);

	//Carga
	this.carga = new MyCarga(this);

	//Destino
	this.destino = new MyDestino(this);
	//______________________________________________

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.floorAppearance=new CGFappearance(this);
	this.floorAppearance.loadTexture("resources/images/floor.png");

	this.windowApperance = new  CGFappearance(this);
	this.windowApperance.loadTexture("resources/images/window.png");
	this.windowApperance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	

	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.loadTexture("resources/images/slides.png");
	this.slidesAppearance.setSpecular(0.1,0.1,0.1,1);
	this.slidesAppearance.setShininess(10);
	this.slidesAppearance.setDiffuse(0.8,0.8,0.8,1);

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.loadTexture("resources/images/board.png");
	this.boardAppearance.setSpecular(0.5,0.5,0.5,1);
	this.boardAppearance.setShininess(100);
	this.boardAppearance.setDiffuse(0.4,0.4,0.4,1);

	this.wallAppearance=new CGFappearance(this);
	this.wallAppearance.loadTexture("resources/images/parede.png");

//Relogio
 	this.clockAppearance = new CGFappearance(this);
	this.clockAppearance.loadTexture("resources/images/clock.png");

	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0.0,0.2,0.8,1);
	this.materialA.setShininess(10);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	this.materialAviao = new CGFappearance(this);
	this.materialAviao.setAmbient(0.3,0.3,0.3,1);
	this.materialAviao.setDiffuse(0.9,0.9,0.9,1);
	this.materialAviao.setSpecular(0.1,0.1,0.1,1);
	this.materialAviao.setShininess(10);

	this.enableTextures(true);

	this.hora = new Date().getTime();
	this.setUpdatePeriod(10);

	this.pause_clock=false;
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	this.lights[4].setPosition(10, 6.0, 10.0, 1);

	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0,1.0,0.0,1.0);
	

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);



	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0,1.0,1.0,1.0);
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1);
	this.lights[2].setQuadraticAttenuation(0);



	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1.0,1.0,0.0,1.0);
	this.lights[3].setConstantAttenuation(0);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setQuadraticAttenuation(0.2);



	this.lights[4].setAmbient(0, 0, 0, 1);
	this.lights[4].setDiffuse(0.7, 0.7, 0.7, 1.0);
	this.lights[4].setSpecular(0.2,0.2,0.2,1.0);


};

LightingScene.prototype.updateLights = function()
{
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();

	if(this.luz1==true)
		this.lights[0].enable();
	else
		this.lights[0].disable();

	if(this.luz2==true)
		this.lights[1].enable();
	else
		this.lights[1].disable();

	if(this.luz3==true)
		this.lights[2].enable();
	else
		this.lights[2].disable();

	if(this.luz4==true)
		this.lights[3].enable();
	else
		this.lights[3].disable();

	if(this.luz5==true)
		this.lights[4].enable();
	else
		this.lights[4].disable();
}


LightingScene.prototype.display = function() {

	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		
		this.floorAppearance.apply();
		//this.wall.display();
		this.floor.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowApperance.apply();
		this.leftwall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
	this.translate(7.5, 4, 0);
	this.scale(15, 8, 0.2);
	this.wallAppearance.apply();
	this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		//this.materialA.apply();
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
	this.translate(10.5, 4.5, 0.2);
	this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
	
	//this.materialB.apply();
	this.boardAppearance.apply();
	this.boardB.display();
	this.popMatrix();

	//Relogio
	this.pushMatrix();
	this.translate(7.3, 7.3, 0.2);
	this.scale(0.7, 0.7, 1);
	this.clockAppearance.apply();
	this.relogio.display();
	this.popMatrix();

	//Aviao
	this.pushMatrix();
	this.translate(this.aviao.aviaox,this.aviao.aviaoy,7);
	this.rotate(degToRad*this.aviao.aviaoang,0,0,1,1);
	this.wallAppearance.apply();
	this.materialAviao.apply();
	this.aviao.display();
	this.popMatrix();

	//Drone
	this.pushMatrix();
	this.drone.display();
	this.popMatrix();

	//Carga
	this.pushMatrix();
	this.carga.display();
	this.popMatrix();

	//Destino
	this.pushMatrix();
	this.destino.display();
	this.popMatrix();



	// ---- END Primitive drawing section
};
LightingScene.prototype.carga_gancho = function() 
{
	if(!this.destino.pousada) //para nao mudar novamente a textura logo apos pousar
	{
	if(!this.carga.trasportada) //Se estiver a ser transportada, nao ha necessidade do resto dos ifs
		if((this.drone.pZ < this.carga.pZ+0.45) && (this.drone.pZ> this.carga.pZ-0.45)) //Z correto
			if((this.drone.pX < this.carga.pX + 0.3) &&(this.drone.pX > this.carga.pX - 0.3)) //X correto
				if((this.drone.getGanchoPosZ() < this.carga.pY + 0.25) &&(this.drone.getGanchoPosZ() > this.carga.pY - 0.3)) //Altura correta
					{
						this.carga.transportada = true;
						this.drone.gancho_setCarregar(true);
					}
	}
};

LightingScene.prototype.carga_destino = function() 
{
	if(this.carga.transportada && !this.destino.pousada) //Se estiver a ser transportada e nao tiver no destino
		if((this.drone.pZ < this.destino.pZ+0.45) && (this.drone.pZ> this.destino.pZ-0.45)) //Z correto
			if((this.drone.pX < this.destino.pX + 0.3) &&(this.drone.pX > this.destino.pX - 0.3)) //X correto
				if((this.drone.getGanchoPosZ() < this.destino.pY + 1) &&(this.drone.getGanchoPosZ() > this.destino.pY+0.55)) //Altura correta
					{
						this.carga.transportada = false;
						this.drone.gancho_setCarregar(false);
						this.destino.pousada = true;
					}

};




LightingScene.prototype.update = function(currTime) 
{

	//Relogio
	if(!this.pause_clock)
		this.relogio.update(currTime - this.hora);
	
	this.hora = currTime;

	//Drone
	this.drone.update(this.speed,true);

	//Carga
	this.carga_gancho();
	if(this.carga.transportada)
	{
		this.carga.pX = this.drone.pX;
		this.carga.pY = this.drone.getGanchoPosZ()-0.2;
		this.carga.pZ = this.drone.pZ;
	}
	this.carga_destino();
	if(this.destino.pousada)
	{
		this.carga.pX = this.destino.pX;
		this.carga.pY = this.destino.pY+0.65;
		this.carga.pZ = this.destino.pZ;
	}

	//Aviao papel
	if(this.aviao.aviaoestado == 0)
	{
		this.aviao.update(1);
	}
	else
	{
		this.aviao.update(2);
	}


};

LightingScene.prototype.pause = function ()
 {
 	if(this.pause_clock)
 		this.pause_clock=false;
 	else
 		this.pause_clock=true;
 }; 


LightingScene.prototype.droneRotateRight = function ()
{
	this.drone.turnRight();	
};

LightingScene.prototype.droneRotateLeft = function ()
{
	this.drone.turnLeft();
};

LightingScene.prototype.droneAscend = function ()
{
	this.drone.ascend();
};

LightingScene.prototype.droneDescend = function ()
{
	this.drone.descend();
};

LightingScene.prototype.droneForward = function ()
{
	this.drone.goForward();
};

LightingScene.prototype.droneBackwards = function ()
{
	this.drone.goBackwards();
};


LightingScene.prototype.drone_ganchoAscend = function ()
{
	this.drone.gancho_ascend();
};

LightingScene.prototype.drone_ganchoDescend = function ()
{
	this.drone.gancho_descend();
};
