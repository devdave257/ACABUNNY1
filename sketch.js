var tp = false;

function preload() {

}

function setup() {
    createCanvas(600, 600);
    bunny = createSprite(40, 575, 30, 30);
    carrot = createSprite(550, 40, 50, 50);
    platformUp = createSprite(300, -20, 650, 45);
    platformUp.visible = false;
    platformDown = createSprite(300, 620, 650, 45);
    platformDown.visible = false;
    platformLeft = createSprite(-20, 300, 45, 650);
    platformLeft.visible = false;
    platformRight = createSprite(620, 300, 45, 650);
    platformRight.visible = false;
    brickGroup = new Group();
    brickGroup2 = new Group();
}

function draw() {
    background(220);

    bunny.collide(platformUp);
    bunny.collide(platformDown);
    bunny.collide(platformLeft);
    bunny.collide(platformRight);

    if (frameCount % 300 === 0) {
        tp = true;
    }

    if (tp === true) {
        if (keyDown("up")) {
            bunny.y -= 3;
            if (keyDown("space")) {
                bunny.y -= 6;
            }
        }

        if (keyDown("down")) {
            bunny.y += 3;
            if (keyDown("space")) {
                bunny.y += 6;
            }
        }

        if (keyDown("left")) {
            bunny.x -= 3;
            if (keyDown("space")) {
                bunny.x -= 6;
            }
        }

        if (keyDown("right")) {
            bunny.x += 3;
            if (keyDown("space")) {
                bunny.x += 6;
            }
        }
    }

    if (bunny.isTouching(brickGroup) || bunny.isTouching(brickGroup2)) {
        bunny.x = 40;
        bunny.y = 575;
    }

    generateBrick();
    generateBrick2();
    drawSprites();

    function generateBrick() {
        if (frameCount % 150 === 0) {
            Brick = createSprite(700, 350, 150, 20);
            Brick.velocityX = -4;
            Brick.y = random(350, 550);
            Brick.lifeTime = 300;
            brickGroup.add(Brick);
        }
    }

    function generateBrick2() {
        if (frameCount % 150 === 0) {
            Brick2 = createSprite(700, 200, 150, 20);
            Brick2.velocityX = -5;
            Brick2.y = random(200, 350);
            Brick2.lifeTime = 300;
            brickGroup2.add(Brick2);
        }
    }
}