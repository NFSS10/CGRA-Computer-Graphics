/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {

	CGFinterface.prototype.init.call(this, application);
	

	this.gui = new dat.GUI();

	this.gui.add(this.scene, 'speed', 0.1, 2.0);

	this.gui.add(this.scene, 'pause');	

	var group=this.gui.addFolder("Luzes");
	group.open();
	group.add(this.scene, 'luz1');
	group.add(this.scene, 'luz2');
	group.add(this.scene, 'luz3');
	group.add(this.scene, 'luz4');
	group.add(this.scene, 'luz5');


	this.gui.add(this.scene, 'Texturas', {'Normal':0,'Neve':1,'Smile':2,'Hydra':3})

	
	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65):	// only works for capital 'A', as it is
		{
			this.scene.droneRotateLeft();
		}
		break;
		case (68):	// only works for capital 'D', as it is
		{
			this.scene.droneRotateRight();
		}
		break;
		
		case (73):	// only works for capital 'I', as it is
		{
			this.scene.droneAscend();
		}
		break;
		case (74):	// only works for capital 'J', as it is
		{
			this.scene.droneDescend();
		}
		break;

		case (87):	// only works for capital 'W', as it is
		{
			this.scene.droneForward();
		}
		break;
		case (83):	// only works for capital 'S', as it is
		{
			this.scene.droneBackwards();
		}
		break;
		case (80):	// only works for capital 'P', as it is
		{
			this.scene.drone_ganchoAscend();
		}
		break;
		case (76):	// only works for capital 'L', as it is
		{
			this.scene.drone_ganchoDescend();
		}
		break;
	};
};
