/**
 * MyUnitcube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitcube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            //Frente
            -0.5,-0.5,0.5, //0
            -0.5,0.5,0.5, //1
            0.5,0.5,0.5, //2
            0.5,-0.5,0.5, //3
            -0.5,-0.5,-0.5, //4
            -0.5,0.5,-0.5, //5
            0.5,0.5,-0.5, //6
            0.5,-0.5,-0.5 //7


			
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0,3,2,
            2,1,0,
            1,2,5,
            2,6,5,
            3,6,2,
            3,7,6,
            4,5,6,
            4,6,7,
            0,4,3,
            3,4,7,
            0,1,4,
            4,1,5,
          
            
           

		
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

