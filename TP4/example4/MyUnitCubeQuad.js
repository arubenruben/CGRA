/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad_object=new MyQuad(this.scene);
    }

    display(){

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad_object.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.quad_object.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2.0,0,1,0);
        this.quad_object.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(Math.PI/2.0+Math.PI,0,1,0);
        this.quad_object.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2.0,1,0,0);
        this.quad_object.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/2+Math.PI,1,0,0);
        this.quad_object.display();
        this.scene.popMatrix();





    }

}

