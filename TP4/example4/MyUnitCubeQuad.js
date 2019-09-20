/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad_object=new MyQuad(this.scene);
        this.initmaterials();
    }


    initmaterials(){

    
        this.material_side = new CGFappearance(this.scene);
        this.material_side.setAmbient(0.1, 0.1, 0.1, 1);
        this.material_side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material_side.setSpecular(0.1, 0.1, 0.1, 1);
        this.material_side.setShininess(10.0);
        this.material_side.loadTexture('images/mineSide.png');
        this.material_side.setTextureWrap('REPEAT', 'REPEAT');

        
        this.material_top=


        this.material_top = new CGFappearance(this.scene);
        this.material_top.setAmbient(0.1, 0.1, 0.1, 1);
        this.material_top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material_top.setSpecular(0.1, 0.1, 0.1, 1);
        this.material_top.setShininess(10.0);
        this.material_top.loadTexture('images/mineTop.png');
        this.material_top.setTextureWrap('REPEAT', 'REPEAT');

        this.material_bottom = new CGFappearance(this.scene);
        this.material_bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.material_bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material_bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.material_bottom.setShininess(10.0);
        this.material_bottom.loadTexture('images/mineBottom.png');
        this.material_bottom.setTextureWrap('REPEAT', 'REPEAT');

    }

    display(){

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.material_side.apply();
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
        this.material_bottom.apply();
        this.quad_object.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(Math.PI/2+Math.PI,1,0,0);
        this.material_top.apply();
        this.quad_object.display();
        this.scene.popMatrix();





    }

}

