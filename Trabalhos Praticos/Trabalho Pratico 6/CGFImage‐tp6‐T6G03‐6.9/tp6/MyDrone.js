/**
 * MyDrone
 * @constructor
 */
 function MyDrone(scene, angulo, pX, pY, pZ)
  {
 	CGFobject.call(this,scene);

	this.angulo = angulo || 200;
    this.pX = pX || 8;
    this.pY = pY || 5;
    this.pZ = pZ || 8.5;

 
 
	//barra Speed
	this.speed = 1;

	//Inclinaçao
	this.inclinacao = 0;
	this.incl_aux = 0;


	//Velocidades rotaçao helices
	this.v_Normal = 7.2*this.speed; //7.2 com update a 10
	this.v_Rapida = 10*this.v_Normal
	this.v_Lenta = 0.2*this.v_Normal
	

	//Velocidade helices
	this.v_h_F=this.v_Normal;
	this.v_h_T=this.v_Normal;
	this.v_h_E=this.v_Normal;
	this.v_h_D=this.v_Normal;


	this.crossCylinder = new MyCylinder(this.scene,25,1);

	this.heliceHolder = new MyCylinder(this.scene,25,1);

	this.leg = new MyUnitCubeQuad(this.scene);
	
	//MyLamp(this.scene, slices, stacks)
	this.semiSphere = new MyLamp(this.scene, 200, 200);



	//Helices
	this.helice_f = new MyHelice(this.scene,0,0.5,0.1);
	this.helice_t = new MyHelice(this.scene,0,0.5,0.1);
	this.helice_e = new MyHelice(this.scene,0,0.5,0.1);
	this.helice_d = new MyHelice(this.scene,0,0.5,0.1);

	//Tampa cilindro
	this.tampa = new TampaCilindro(this.scene);
	this.tampa.initBuffers();

	//Pernas
	this.pernas = new MyPernas(this.scene,20);
	this.pernas.initBuffers();

	this.gancho = new MyGancho(this.scene);

	//____________________ TEXTURAS  ___________________________
	this.tex_frente =new CGFappearance(this.scene);
	this.tex_frente.setDiffuse(0.9,0.9,0.9,1);
	this.tex_frente.setSpecular(0.8,0.8,0.8,1);
	this.tex_frente.setShininess(100);
	this.tex_frente.loadTexture("resources/images/parede.png");

	this.droneAppearances = [new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene)];
	this.droneAppearances_braco = [new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene)];
	this.droneAppearances_perna = [new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene)];
	this.droneAppearances_helices = [new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene)];
	this.droneAppearances_cili_helices = [new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene),new CGFappearance(this.scene)];
	
	//Normal drone
	this.droneAppearances[0].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances[0].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances[0].setShininess(100);
	this.droneAppearances[0].loadTexture("resources/images/p1/drone.png");
	
	this.droneAppearances_braco[0].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_braco[0].setSpecular(0.7,0.7,0.7,1);
	this.droneAppearances_braco[0].setShininess(100);
	this.droneAppearances_braco[0].loadTexture("resources/images/p1/braco.png");
	
	this.droneAppearances_perna[0].setDiffuse(0.8,0.8,0.8,1);
	this.droneAppearances_perna[0].setSpecular(0.5,0.5,0.5,1);
	this.droneAppearances_perna[0].setShininess(100);
	this.droneAppearances_perna[0].loadTexture("resources/images/p1/perna.png");
	
	this.droneAppearances_helices[0].setDiffuse(0.5,0.5,0.5,1);
	this.droneAppearances_helices[0].setSpecular(0.3,0.3,0.3,1);
	this.droneAppearances_helices[0].setShininess(10);
	this.droneAppearances_helices[0].loadTexture("resources/images/p1/helice.png");

	this.droneAppearances_cili_helices[0].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_cili_helices[0].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances_cili_helices[0].setShininess(100);
	this.droneAppearances_cili_helices[0].loadTexture("resources/images/p1/cil.png");



	//Camuflado neve
	this.droneAppearances[1].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances[1].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances[1].setShininess(100);
	this.droneAppearances[1].loadTexture("resources/images/p2/drone.png");
	
	this.droneAppearances_braco[1].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_braco[1].setSpecular(0.7,0.7,0.7,1);
	this.droneAppearances_braco[1].setShininess(100);
	this.droneAppearances_braco[1].loadTexture("resources/images/p2/braco.png");
	
	this.droneAppearances_perna[1].setDiffuse(0.8,0.8,0.8,1);
	this.droneAppearances_perna[1].setSpecular(0.5,0.5,0.5,1);
	this.droneAppearances_perna[1].setShininess(100);
	this.droneAppearances_perna[1].loadTexture("resources/images/p2/perna.png");
	
	this.droneAppearances_helices[1].setDiffuse(0.5,0.5,0.5,1);
	this.droneAppearances_helices[1].setSpecular(0.3,0.3,0.3,1);
	this.droneAppearances_helices[1].setShininess(10);
	this.droneAppearances_helices[1].loadTexture("resources/images/p2/helice.png");

	this.droneAppearances_cili_helices[1].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_cili_helices[1].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances_cili_helices[1].setShininess(100);
	this.droneAppearances_cili_helices[1].loadTexture("resources/images/p2/cil.png");
	

	//Smile
	this.droneAppearances[2].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances[2].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances[2].setShininess(100);
	this.droneAppearances[2].loadTexture("resources/images/p3/drone.png");
	
	this.droneAppearances_braco[2].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_braco[2].setSpecular(0.7,0.7,0.7,1);
	this.droneAppearances_braco[2].setShininess(100);
	this.droneAppearances_braco[2].loadTexture("resources/images/p3/braco.png");
	
	this.droneAppearances_perna[2].setDiffuse(0.8,0.8,0.8,1);
	this.droneAppearances_perna[2].setSpecular(0.5,0.5,0.5,1);
	this.droneAppearances_perna[2].setShininess(100);
	this.droneAppearances_perna[2].loadTexture("resources/images/p3/perna.png");
	
	this.droneAppearances_helices[2].setDiffuse(0.5,0.5,0.5,1);
	this.droneAppearances_helices[2].setSpecular(0.3,0.3,0.3,1);
	this.droneAppearances_helices[2].setShininess(10);
	this.droneAppearances_helices[2].loadTexture("resources/images/p3/helice.png");

	this.droneAppearances_cili_helices[2].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_cili_helices[2].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances_cili_helices[2].setShininess(100);
	this.droneAppearances_cili_helices[2].loadTexture("resources/images/p3/cil.png");
	

	//Hydra
	this.droneAppearances[3].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances[3].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances[3].setShininess(100);
	this.droneAppearances[3].loadTexture("resources/images/p4/drone.png");
	
	this.droneAppearances_braco[3].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_braco[3].setSpecular(0.7,0.7,0.7,1);
	this.droneAppearances_braco[3].setShininess(100);
	this.droneAppearances_braco[3].loadTexture("resources/images/p4/braco.png");
	
	this.droneAppearances_perna[3].setDiffuse(0.8,0.8,0.8,1);
	this.droneAppearances_perna[3].setSpecular(0.5,0.5,0.5,1);
	this.droneAppearances_perna[3].setShininess(100);
	this.droneAppearances_perna[3].loadTexture("resources/images/p4/perna.png");
	
	this.droneAppearances_helices[3].setDiffuse(0.5,0.5,0.5,1);
	this.droneAppearances_helices[3].setSpecular(0.3,0.3,0.3,1);
	this.droneAppearances_helices[3].setShininess(10);
	this.droneAppearances_helices[3].loadTexture("resources/images/p4/helice.png");

	this.droneAppearances_cili_helices[3].setDiffuse(0.9,0.9,0.9,1);
	this.droneAppearances_cili_helices[3].setSpecular(0.8,0.8,0.8,1);
	this.droneAppearances_cili_helices[3].setShininess(100);
	this.droneAppearances_cili_helices[3].loadTexture("resources/images/p4/cil.png");



	//__________________________________________________________
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;


MyDrone.prototype.display = function() 
{
	//Translaçao e rotaçao do drone
	this.scene.pushMatrix();
	this.scene.translate(this.pX,this.pY,this.pZ);
	this.scene.rotate(degToRad*this.angulo,0,1,0,1);


	//Inclinaçao
	this.scene.pushMatrix();
	this.scene.rotate(degToRad*this.inclinacao,1,0,0,1);
	
	//_______________________________________________________________
	//CrossCylinder1
	this.scene.pushMatrix();	
	this.scene.translate(0,0,-2);
	this.scene.scale(0.100,0.100,4);
	this.droneAppearances_braco[this.scene.Texturas].apply();
	this.crossCylinder.display();
	this.scene.popMatrix();

	//CrossCylinder2
	this.scene.pushMatrix();
	this.scene.translate(-2,0,0);
	this.scene.rotate(degToRad * 90, 0, 1, 0);	
	this.scene.scale(0.100,0.100,4);
	this.droneAppearances_braco[this.scene.Texturas].apply();
	this.crossCylinder.display();
	this.scene.popMatrix();
	
	//--------------------------------------------------------------
	//HeliceHolder1
	this.scene.pushMatrix();
	this.scene.translate(0,0.2,-2);
	this.scene.rotate(degToRad * 90, 1, 0, 0);	
	this.scene.scale(0.20,0.20,0.3);
	this.droneAppearances_cili_helices[this.scene.Texturas].apply();
	this.heliceHolder.display();
	this.scene.popMatrix();
	
	//HeliceHolder2
	this.scene.pushMatrix();
	this.scene.translate(2,0.2,0);
	this.scene.rotate(degToRad * 90, 1, 0, 0);	
	this.scene.scale(0.20,0.20,0.3);
	this.droneAppearances_cili_helices[this.scene.Texturas].apply();
	this.heliceHolder.display();
	this.scene.popMatrix();
	
	//Helice holder Frente ***************
	this.scene.pushMatrix();
	this.scene.translate(0,0.2,2);
	this.scene.rotate(degToRad * 90, 1, 0, 0);	
	this.scene.scale(0.20,0.20,0.3);
	this.tex_frente.apply();//******
	this.heliceHolder.display();
	this.scene.popMatrix();
	
	//HeliceHolder4
	this.scene.pushMatrix();
	this.scene.translate(-2,0.2,0);
	this.scene.rotate(degToRad * 90, 1, 0, 0);	
	this.scene.scale(0.20,0.20,0.3);
	this.droneAppearances_cili_helices[this.scene.Texturas].apply();
	this.heliceHolder.display();
	this.scene.popMatrix();
	//--------------------------------------------------------------

	//Leg1
	this.scene.pushMatrix();
	this.scene.translate(0.7,-0.6,0);
	this.scene.scale(0.125,0.095,2);
	this.droneAppearances_perna[this.scene.Texturas].apply();
	this.leg.display();
	this.scene.popMatrix();

	//Leg2undefined
	this.scene.pushMatrix();
	this.scene.translate(-0.7,-0.6,0);
	this.scene.scale(0.125,0.095,2);
	this.droneAppearances_perna[this.scene.Texturas].apply();
	this.leg.display();
	this.scene.popMatrix();
	
	//Semi esfera principal
	this.scene.pushMatrix();
	this.scene.translate(0,-0.1,0);
	this.scene.rotate(degToRad * -90,1,0,0);
	this.scene.scale(0.75,0.75,0.75);
	this.droneAppearances[this.scene.Texturas].apply();
	this.semiSphere.display();
	this.scene.popMatrix();

	//========================================================
	//Helice Frente
	this.scene.pushMatrix();
	this.scene.translate(0,0.2,2);
	this.scene.scale(2,2,2);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.helice_f.display();
	this.scene.popMatrix();

	//Helice Trás
	this.scene.pushMatrix();
	this.scene.translate(0,0.2,-2);
	this.scene.scale(2,2,2);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.helice_t.display();
	this.scene.popMatrix();

	//Helice Esquerda
	this.scene.pushMatrix();
	this.scene.translate(2,0.2,0);
	this.scene.scale(2,2,2);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.helice_e.display();
	this.scene.popMatrix();

	//Helice Direita
	this.scene.pushMatrix();
	this.scene.translate(-2,0.2,0);
	this.scene.scale(2,2,2);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.helice_d.display();
	this.scene.popMatrix();
	//========================================================

	//Semiesfera helice frente________________
	this.scene.pushMatrix();
	this.scene.translate(0,0.2,2);
	this.scene.rotate(degToRad * -90,1,0,0);
	this.scene.scale(0.2,0.2,0.1);
	this.droneAppearances[this.scene.Texturas].apply();
	this.semiSphere.display();
	this.scene.popMatrix();
	//Semiesfera helice tras
	this.scene.pushMatrix();
	this.scene.translate(0,0.2,-2);
	this.scene.rotate(degToRad * -90,1,0,0);
	this.scene.scale(0.2,0.2,0.1);
	this.droneAppearances[this.scene.Texturas].apply();
	this.semiSphere.display();
	this.scene.popMatrix();
	//Semiesfera helice esquerda
	this.scene.pushMatrix();
	this.scene.translate(2,0.2,0);
	this.scene.rotate(degToRad * -90,1,0,0);
	this.scene.scale(0.2,0.2,0.1);
	this.droneAppearances[this.scene.Texturas].apply();
	this.semiSphere.display();
	this.scene.popMatrix();
	//Semiesfera helice direita
	this.scene.pushMatrix();
	this.scene.translate(-2,0.2,0);
	this.scene.rotate(degToRad * -90,1,0,0);
	this.scene.scale(0.2,0.2,0.1);
	this.droneAppearances[this.scene.Texturas].apply();
	this.semiSphere.display();
	this.scene.popMatrix();
	//                         __________________

	//Tampa de baixo
	this.scene.pushMatrix();
	this.scene.translate(0,-0.1,0);
	this.scene.rotate(degToRad*180,0,1,-1,1);
	this.scene.scale(0.78,0.78,0.78);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.tampa.display();
	this.scene.popMatrix();


	//Perna tras direita
	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.4);
	this.scene.rotate(degToRad*180,1,0,0,1);
	this.scene.scale(0.7,0.6,1);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.pernas.display();
	this.scene.popMatrix();
	//Perna tras esquerda
	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.4);
	this.scene.rotate(degToRad*180,0,0,1,1);
	this.scene.scale(0.7,0.6,1);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.pernas.display();
	this.scene.popMatrix();
	//Perna frente direita
	this.scene.pushMatrix();
	this.scene.translate(0,0,0.6);
	this.scene.rotate(degToRad*180,1,0,0,1);
	this.scene.scale(0.7,0.6,1);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.pernas.display();
	this.scene.popMatrix();
	//Perna frente esquerda
	this.scene.pushMatrix();
	this.scene.translate(0,0,0.6);
	this.scene.rotate(degToRad*180,0,0,1,1);
	this.scene.scale(0.7,0.6,1);
	this.droneAppearances_helices[this.scene.Texturas].apply();
	this.pernas.display();
	this.scene.popMatrix();

	//_______________________________________________________________

	
	this.scene.popMatrix();
	
	//Gancho
	this.scene.pushMatrix();
	this.scene.translate(0,0,0);
	this.gancho.display();
	this.scene.popMatrix();

	this.scene.popMatrix();
};


MyDrone.prototype.turnLeft = function() 
{
	this.angulo=this.angulo+2;

	this.v_h_F=this.v_Lenta;
	this.v_h_T=this.v_Lenta;
	this.v_h_E=this.v_Rapida;
	this.v_h_D=this.v_Rapida;
};

MyDrone.prototype.turnRight = function() 
{
	this.angulo=this.angulo-2;

	this.v_h_F=this.v_Lenta;
	this.v_h_T=this.v_Lenta;
	this.v_h_E=this.v_Rapida;
	this.v_h_D=this.v_Rapida;
};

MyDrone.prototype.ascend = function() 
{
	this.pY=this.pY+0.1;


	this.v_h_F=this.v_Rapida;
	this.v_h_T=this.v_Rapida;
	this.v_h_E=this.v_Rapida;
	this.v_h_D=this.v_Rapida;
};

//Nao sei se as helicfes param ou se revertem, por isso fica assim, com descida constante
MyDrone.prototype.descend = function() 
{
	this.pY=this.pY-0.1;

	this.v_h_F=this.v_Lenta;
	this.v_h_T=this.v_Lenta;
	this.v_h_E=this.v_Lenta;
	this.v_h_D=this.v_Lenta;
};


MyDrone.prototype.goForward = function() 
{
	this.pX=this.pX+Math.sin(degToRad*this.angulo)/10;
	this.pZ=this.pZ+Math.cos(degToRad*this.angulo)/10;

	this.incl_aux=3;
	if(this.inclinacao<15)
		this.inclinacao+=2.5;

	this.v_h_F=this.v_Lenta;
	this.v_h_T=this.v_Rapida;
	this.v_h_E=this.v_Normal;
	this.v_h_D=this.v_Normal;
};

MyDrone.prototype.goBackwards = function() 
{
	this.pX=this.pX-Math.sin(degToRad*this.angulo)/10;
	this.pZ=this.pZ-Math.cos(degToRad*this.angulo)/10;


	this.incl_aux=3;
	if(this.inclinacao>-15)
		this.inclinacao-=2.5;

	this.v_h_F=this.v_Rapida;
	this.v_h_T=this.v_Lenta;
	this.v_h_E=this.v_Normal;
	this.v_h_D=this.v_Normal;
};

MyDrone.prototype.update_velocidades = function()
{
	//Velocidades rotaçao helices
	this.v_Normal = 7.2*this.speed;
	this.v_Rapida = 10*this.v_Normal
	this.v_Lenta = 0.2*this.v_Normal
	

	//Normaliza a inclinaçao
	if(this.incl_aux>0)
		this.incl_aux--;
	if(this.incl_aux==0)
	{
		if(this.inclinacao>0)
			this.inclinacao-=1.25;	
		else if(this.inclinacao<0)
			this.inclinacao+=1.25;
	}

	//Vai normalizando a velocidade das helices apos movimento
	if(this.v_h_F>this.v_Normal)
		this.v_h_F=this.v_h_F-0.8;
	if(this.v_h_F<this.v_Normal)
		this.v_h_F=this.v_h_F+0.5;
	
	if(this.v_h_T>this.v_Normal)
		this.v_h_T=this.v_h_T-0.8;
	if(this.v_h_T<this.v_Normal)
		this.v_h_T=this.v_h_T+0.5;
	
	if(this.v_h_E>this.v_Normal)
		this.v_h_E=this.v_h_E-0.8;
	if(this.v_h_E<this.v_Normal)
		this.v_h_E=this.v_h_E+0.5;
		
	if(this.v_h_D>this.v_Normal)
		this.v_h_D=this.v_h_D-0.8;
	if(this.v_h_D<this.v_Normal)
		this.v_h_D=this.v_h_D+0.5;
	
};



MyDrone.prototype.update = function(speed_vel)
{
	this.speed=speed_vel;
	this.update_velocidades();


	//Update Helices
	this.helice_f.update(this.v_h_F, true);
	this.helice_t.update(this.v_h_T, true);
	this.helice_e.update(this.v_h_E, false);
	this.helice_d.update(this.v_h_D, false);	
};

MyDrone.prototype.gancho_ascend = function()
{
	this.gancho.ascend();
	
};

MyDrone.prototype.gancho_descend = function()
{
	this.gancho.descend();
};

MyDrone.prototype.getGanchoPosZ = function()
{
	return this.pY - this.gancho.pZ-0.2;
};

MyDrone.prototype.gancho_setCarregar = function(bool)
{
	this.gancho.setCarregar(bool);
};