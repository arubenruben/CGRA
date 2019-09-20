/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, -1, 0,	//0
			1, -1, 0,//1
			-1, 1, 0,	//2

			-1, -1, 0,	//3
			1, -1, 0,//4
			-1, 1, 0	//5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0

		];

		this.texCoords = [];


		this.normals = [];
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}



	updatetextcoords(id) {


		switch (id) {

			case 'orange':

				this.texCoords = [
					0.5,0.5,
					0.25,0.75,
					0.25,0.25
				];

				break;

			case 'blue':

				this.texCoords = [
					0.25,0.25,
					0.0,0.3,
					0.0,0.1

				];


				break;

			case 'pink':
				
			this.texCoords = [
					0.5,0.5,
					1.0,1.0,
					1.0,0.0
				];

				break;

			case 'purple':

				this.texCoords = [
					0.5,0.5,
					0.75,0.75,
					0.25,0.75
				];

				break;

			case 'red':
				this.texCoords=[
					0.5,0.5,
					1.0,0.0,
					0.0,0.0
				];
			

			break;

		}




		//Chamada ao sistema para atualizar o Buffer das text coords guardado da inicializacao
		this.updateTexCoordsGLBuffers();

	}
}
