/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.diamond_verde = new MyDiamond(scene);
        this.triangle_orange = new MyTriangle(scene);
        this.triangle_blue = new MyTriangle(scene);
        this.parallelogram_yellow = new MyParalellogram(scene);
        this.triangle_purple = new MyTriangle(scene);
        this.triangle_pink = new MyTriangle(scene);
        this.triangle_red = new MyTriangle(scene);
        this.init_materials();

    }

    init_materials() {

        this.tangram_material = new CGFappearance(this);
        this.tangram_material.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangram_material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangram_material.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangram_material.setShininess(10.0);
        this.tangram_material.loadTexture('images/tangram.png');
        this.tangram_material.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {

        this.tangram_material.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.5, 0);
        this.scene.updateCustomMaterial();

        this.diamond_verde.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-1.33, 0, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);

        this.triangle_orange.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(-0.98, -1, 0);
        this.scene.rotate(Math.PI / 2.0, 0, 0, 1);

        this.triangle_blue.display();

        this.scene.popMatrix();


        this.scene.pushMatrix();

        this.scene.translate(-0.5, 0.5, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(Math.PI / 2.0, 0, 0, 1);

        this.parallelogram_yellow.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0.5, 2.5, 0);


        this.scene.scale(0.5, 0.5, 1);

        this.scene.translate(1, 1, 0);

        this.triangle_purple.display(); //Este e que e o purple
        this.scene.popMatrix();


        this.scene.pushMatrix();

        this.scene.translate(0, -1.03, 0);
        this.scene.scale(0.8, 0.71, 1);
        this.scene.rotate(Math.PI / 2.0 + Math.PI / 4.0, 0, 0, 1);

        this.triangle_pink.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();


        this.scene.translate(1.375, -0.47, 0);
        this.scene.scale(0.6, 0.6, 1);
        this.scene.rotate(-Math.PI / 4.0, 0, 0, 1);

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

