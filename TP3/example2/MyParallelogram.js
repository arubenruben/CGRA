/**
 * MyParalellogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParalellogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0,0,0,
			2,0,0,
			3,1,0,
			1,1,0,

			0,0,0,
			2,0,0,
			3,1,0,
			1,1,0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
			2,3,0,
			0,3,2,
			2,1,0
		];

		this.normals=[];
		
		this.normals.push(0,0,1);
		this.normals.push(0,0,1);
		this.normals.push(0,0,1);
		this.normals.push(0,0,1);
		this.normals.push(0,0,-1);
		this.normals.push(0,0,-1);
		this.normals.push(0,0,-1);
		this.normals.push(0,0,-1);



		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

