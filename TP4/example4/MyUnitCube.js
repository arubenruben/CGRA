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
            this.normals = [];
            
            this.vertices = [
                  //Frente
                  -0.5, -0.5, 0.5, //0
                  -0.5, -0.5, 0.5, //1
                  -0.5, -0.5, 0.5, //2
                  
                  -0.5, 0.5, 0.5, //3
                  -0.5, 0.5, 0.5, //4
                  -0.5, 0.5, 0.5, //5
                  
                  0.5, 0.5, 0.5, //6
                  0.5, 0.5, 0.5, //7
                  0.5, 0.5, 0.5, //8
                  
                  0.5, -0.5, 0.5, //9
                  0.5, -0.5, 0.5, //10
                  0.5, -0.5, 0.5, //11

                  -0.5,-0.5,-0.5,//12
                  -0.5,-0.5,-0.5,//13
                  -0.5,-0.5,-0.5,//14


                  -0.5,0.5,-0.5,//15
                  -0.5,0.5,-0.5,//16
                  -0.5,0.5,-0.5,//17

                  0.5,0.5,-0.5,//18
                  0.5,0.5,-0.5,//19
                  0.5,0.5,-0.5,//20

                  0.5,-0.5,-0.5,//21
                  0.5,-0.5,-0.5,//22
                  0.5,-0.5,-0.5,//23




                  
                  
            ];

            this.indices = [
                  0,6,3,
                  9,6,0,
                  0,3,12,
                  3,15,12,
                  0,12,9,
                  9,12,21,
                  9,21,6,
                  21,18,6,
                  21,12,15,
                  15,18,21,
                  6,15,3,
                  6,18,15,
            ];
            
            
            this.normals.push(0,0,1);
            this.normals.push(0,-1,0);
            this.normals.push(-1,0,0);
            
            this.normals.push(0,0,1);
            this.normals.push(0,1,0);
            this.normals.push(-1,0,0);
            
            this.normals.push(0,0,1);
            this.normals.push(0,1,0);
            this.normals.push(1,0,0);

            this.normals.push(0,0,1);
            this.normals.push(0,-1,0);
            this.normals.push(1,0,0);

            this.normals.push(0,0,-1);
            this.normals.push(0,-1,0);
            this.normals.push(-1,0,0);

            this.normals.push(0,0,-1);
            this.normals.push(0,1,0);
            this.normals.push(-1,0,0);

            this.normals.push(0,0,-1);
            this.normals.push(0,1,0);
            this.normals.push(1,0,0);
            
            this.normals.push(0,0,-1);
            this.normals.push(0,-1,0);
            this.normals.push(1,0,0);
            
            
            
            
            
            //Counter-clockwise reference of vertices
            this.primitiveType = this.scene.gl.TRIANGLES;
            this.initGLBuffers();
      }
}

