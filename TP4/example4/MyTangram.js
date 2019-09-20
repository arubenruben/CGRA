/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene=scene;
        this.diamond_verde=new MyDiamond(scene);
        this.triangle_orange=new MyTriangle(scene);
        this.triangle_blue=new MyTriangle(scene);
        this.parallelogram_yellow=new MyParalellogram(scene);
        this.triangle_purple=new MyTriangle(scene);
        this.triangle_pink=new MyTriangle(scene);
        this.triangle_red=new MyTriangle(scene);
        this.init_materials();

    }

    init_materials(){

        this.specular_blue=new CGFappearance(this.scene);
        this.specular_blue.setSpecular(0,0,1,1);
        this.specular_blue.setDiffuse(0,0,0.2,1);
        this.specular_blue.setAmbient(0,0,0.2,1);


        this.specular_green=new CGFappearance(this.scene);
        this.specular_green.setSpecular(0,1,0,1);
        this.specular_green.setDiffuse(0,0.2,0,1);
        this.specular_green.setAmbient(0,0.2,0,1);

        this.specular_yellow=new CGFappearance(this.scene);
        this.specular_yellow.setSpecular(1,1,0,1);
        this.specular_yellow.setDiffuse(0.2,0.2,0,1);
        this.specular_yellow.setAmbient(0.2,0.2,0,1);

        this.specular_purple=new CGFappearance(this.scene);
        this.specular_purple.setSpecular(1,0,1,1);
        this.specular_purple.setDiffuse(0.2,0,0.2,1);
        this.specular_purple.setAmbient(0.2,0,0.2,1);

        this.specular_pink=new CGFappearance(this.scene);
        this.specular_pink.setSpecular(1,0.7,0.8,1);
        this.specular_pink.setDiffuse(0.2,0.1,0.2,1);
        this.specular_pink.setAmbient(0.2,0.1,0.2,1);

        this.specular_red=new CGFappearance(this.scene);
        this.specular_red.setSpecular(1,0,0,1);
        this.specular_red.setDiffuse(0.2,0,0,1);
        this.specular_red.setAmbient(0.2,0,0,1);

        this.specular_orange=new CGFappearance(this.scene);
        this.specular_orange.setSpecular(1,0.5,0.2,1);
        this.specular_orange.setDiffuse(0.2,0.1,0.05,1);
        this.specular_orange.setAmbient(0.2,0,0.05,1);
        
        
    }
    
    display(){
        
        this.scene.pushMatrix();
        this.scene.translate(0.5,0.5,0);
        this.scene.updateCustomMaterial();
        this.scene.customMaterial.apply();
        this.diamond_verde.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-1.33,0,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.specular_orange.apply();
        this.triangle_orange.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-0.98,-1,0);
        this.scene.rotate(Math.PI/2.0,0,0,1);
        this.specular_blue.apply();
        this.triangle_blue.display();

        this.scene.popMatrix();


        this.scene.pushMatrix();

        this.scene.translate(-0.5,0.5,0);
        this.scene.scale(-1,1,1);
        this.scene.rotate(Math.PI/2.0,0,0,1);
        this.specular_yellow.apply();
        this.parallelogram_yellow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0.5,2.5,0);


        this.scene.scale(0.5,0.5,1);

        this.scene.translate(1,1,0);
        this.specular_purple.apply();
        this.triangle_purple.display(); //Este e que e o purple
        this.scene.popMatrix();
        
        
        this.scene.pushMatrix();
        
        this.scene.translate(0,-1.03,0);
        this.scene.scale(0.8,0.71,1);
        this.scene.rotate(Math.PI/2.0+Math.PI/4.0,0,0,1);
        this.specular_pink.apply();
        this.triangle_pink.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();


        this.scene.translate(1.375,-0.47,0);
        this.scene.scale(0.6,0.6,1);
        this.scene.rotate(-Math.PI/4.0,0,0,1);
        this.specular_red.apply();
        this.triangle_red.display();
        this.scene.popMatrix();

        

    }

    enableNormalViz() {
        this.triangle_blue.enableNormalViz();
        this.triangle_orange.enableNormalViz();
        this.triangle_pink.enableNormalViz();
        this.triangle_purple.enableNormalViz();
        this.triangle_red.enableNormalViz();
        this.parallelogram_yellow.enableNormalViz();
        this.diamond_verde.enableNormalViz();

    }
    
}

