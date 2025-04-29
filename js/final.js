let player = {
    x: 75,
    y: 150,
    xVel: 0,
    yVel: 0,
    jump : true,
    height: 20,
    width: 20
};

let movement = {
    right: false,
    left: false,
    up: false
};

let gravity = 0.6;
let friction = 0.7;

let num = 10;

let platforms = [];
let digiBoxes = [];
let usedDigits = [];
let usedDigiSize = 0;

function createCanvas() 
{
     ctx.fillStyle = "#13478a";
     ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function createPlayer()
{
    ctx.fillStyle = "#0d0000";
    ctx.fillRect((player.x)-20, (player.y)-20, player.width, player.height);
}

function generatePlatforms()
{
    for(let i = 0; i < num; i++)
    {
        platforms.push(
            {
            x: 135 * i,
            y: 180 + (30 * i),
            width: 110,
            height: 15
            }
        );
    }
}

function generateDigiBoxes()
{
    for(let j = 0; j < num; j++)
    {
    digiBoxes.push(
        {
            x:175*j,
            y:100 + (30*j),
            width:30,
            height:30,
            digit: Math.floor(Math.random() * 10)
        }
    )
    }
}

function renderPlatform()
{
    ctx.fillStyle = "#45597E";
    for(let k = 0; k < num; k++)
    {
        ctx.fillRect(platforms[k].x, platforms[k].y, platforms[k].width, platforms[k].height);
    }

}

function renderDigiBoxes()
{
    for(let l = 0; l < num; l++)
    {
        ctx.fillStyle = "#ADD8E6";
        ctx.fillRect(digiBoxes[l].x, digiBoxes[l].y, digiBoxes[l].width, digiBoxes[l].height);
        ctx.font = "20px serif"
        ctx.fillStyle = "black";
        ctx.fillText(digiBoxes[l].digit, digiBoxes[l].x+10, digiBoxes[l].y+20);
        usedDigits.push(digiBoxes[l]);
    }
}

function keyPress(e)
{
    if(e.keyCode == 37)
    {
        movement.left = true;
    }
    else if(e.keyCode == 39)
    {
        movement.right = true;
    }

    if(e.keyCode == 38)
    {
        if(player.jump == false) 
        {
            player.yVel = -10;
        }
    }
}

function keyRelease(e)
{
    if(e.keyCode == 37)
    {
        movement.left = false;
    }
    else if(e.keyCode == 39)
    {
        movement.right = false;
    }

    if(e.keyCode == 38) 
    {
        if(player.yVel < -2) 
        {
        player.yVel = -3;
        }
    }
}

function digiBoxCollision()
{
    
}

function loopgamePlay()
{

    if(player.jump == false) 
    {
        player.xVel *= friction;
    } 
    else 
    {
        // If the player is in the air then apply the effect of gravity
        player.yVel += gravity;
    }
    player.jump = true;

    if(movement.left) 
    {
        player.x+= -2.5;
    }
    if(movement.right) 
    {
        player.x  += 2.5;
    }

    player.y += player.yVel;
    player.x += player.xVel;

    let i = -1;
    if(platforms[0].x < player.x && player.x < platforms[0].x + platforms[0].width &&
        platforms[0].y < player.y && player.y < platforms[0].y + platforms[0].height){
            i = 0;
    }
    if(platforms[1].x < player.x && player.x < platforms[1].x + platforms[1].width &&
        platforms[1].y < player.y && player.y < platforms[1].y + platforms[1].height){
        i = 1;
    }
    if(platforms[2].x < player.x && player.x < platforms[2].x + platforms[2].width &&
        platforms[2].y < player.y && player.y < platforms[2].y + platforms[2].height){
        i = 2;
    }
    if(platforms[3].x < player.x && player.x < platforms[3].x + platforms[3].width &&
        platforms[3].y < player.y && player.y < platforms[3].y + platforms[3].height){
        i = 3;
    }
    if(platforms[4].x < player.x && player.x < platforms[4].x + platforms[4].width &&
        platforms[4].y < player.y && player.y < platforms[4].y + platforms[4].height){
        i = 4;
    }
    if(platforms[5].x < player.x && player.x < platforms[5].x + platforms[5].width &&
        platforms[5].y < player.y && player.y < platforms[5].y + platforms[5].height){
        i = 5;
    }
    if(platforms[6].x < player.x && player.x < platforms[6].x + platforms[6].width &&
        platforms[6].y < player.y && player.y < platforms[6].y + platforms[6].height){
        i = 6;
    }
    if(platforms[7].x < player.x && player.x < platforms[7].x + platforms[7].width &&
        platforms[7].y < player.y && player.y < platforms[7].y + platforms[7].height){
        i = 7;
    }
    if(platforms[8].x < player.x && player.x < platforms[8].x + platforms[8].width &&
        platforms[8].y < player.y && player.y < platforms[8].y + platforms[8].height){
        i = 8;
    }
    if(platforms[9].x < player.x && player.x < platforms[9].x + platforms[9].width &&
        platforms[9].y < player.y && player.y < platforms[9].y + platforms[9].height){
        i = 9;
    }

    if (i > -1){
        player.jump = false;
        player.y = platforms[i].y;    
    }



    createCanvas();
    createPlayer();
    renderPlatform();
    renderDigiBoxes();
}
canvas=document.getElementById("canv");
    ctx=canvas.getContext("2d");
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    generatePlatforms();
    generateDigiBoxes();
    document.addEventListener("keydown",keyPress);
    document.addEventListener("keyup",keyRelease);
    setInterval(loopgamePlay,22);