let player = {
    x: 30,
    y: 150,
    xVel: 0,
    yVel: 0,
    jump : true,
    height: 30,
    width: 30
};

let movement = {
    right: false,
    left: false,
    up: false
};

let gravity = 0.22;
let friction = 0.7;

let num = 10;
let phoneNumIndex = 0;
let prompt = document.getElementById("prompt");
let phoneNumber = document.getElementById("phoneNum");
let resetBtn = document.getElementById("res");
let submitBtn = document.getElementById("submitNumber");
let background = document.getElementById("bckgrnd");
let subMsg = "";

let platforms = [];
let digiBoxes = [];

function createCanvas() 
{
    ctx.drawImage(background,0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "25px American Typewriter";
    ctx.textAlign = 'center';
    ctx.fillText(prompt.textContent, canvas.width/2, 60);
    ctx.fillText(phoneNumber.textContent, canvas.width/2, 90);

    if(subMsg != "")
    {
        ctx.fillStyle = "white";
        ctx.fillText(subMsg, canvas.width/2, 750)
        setTimeout(()=> {reset()}, 3500);
    }
}

function createPlayer()
{
    let telephoneMan = document.getElementById("phone");
    ctx.drawImage(telephoneMan, (player.x)-30, (player.y)-30, player.width, player.height);
}

function generatePlatforms()
{
    let max = 200;
    let min = -50;
    for(let i = 0; i < num; i++)
    {
        platforms.push(
            {
            x: 146 * i,
            y: 280 + Math.floor(Math.random() * (max - min) + min),
            width: 110,
            height: 25
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
            x: platforms[j].x + 40,
            y:platforms[j].y - 100,
            width:40,
            height:40,
            digit: j
        }
    )
    }
}

function renderPlatform()
{
    ctx.fillStyle = "#45597E";
    let platformImg = document.getElementById("platform")
    for(let k = 0; k < num; k++)
    {
        ctx.drawImage(platformImg,platforms[k].x, platforms[k].y, platforms[k].width, platforms[k].height);
    }

}

function renderDigiBoxes()
{
    let box = document.getElementById("box");
    for(let l = 0; l < num; l++)
    {
        ctx.fillStyle = "white";
        ctx.drawImage(box, digiBoxes[l].x, digiBoxes[l].y, digiBoxes[l].width, digiBoxes[l].height);
        ctx.font = "20px serif"
        ctx.fillStyle = "black";
        ctx.fillText(digiBoxes[l].digit, digiBoxes[l].x+20, digiBoxes[l].y+25);
    }
}

function renderSubmitBox()
{
    let subBox = document.getElementById("submitBox");
    ctx.drawImage(subBox, 677, 100, 53, 19);
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

function checkBoxCollision()
{
    let b = -1;
    let l = -1;
    for(let k = 0; k < num; k++)
    {
        if(digiBoxes[k].x < player.x  && player.x < digiBoxes[k].x + (digiBoxes[k].width*1.6) &&
        player.y <= digiBoxes[k].y + (digiBoxes[k].height*1.6) && player.y >= digiBoxes[k].y + digiBoxes[k].height + player.yVel
        && player.yVel < 0){
                b = k;
        }
    }
    if (b > -1)
    {  
        player.yVel = 0;
        let stringArr = phoneNumber.textContent.split("");
        while(stringArr[phoneNumIndex] === '(' || stringArr[phoneNumIndex] === ')'
        || stringArr[phoneNumIndex] === '-')
        {
            phoneNumIndex++;
        }
        if(phoneNumber.textContent.includes("_") && phoneNumIndex != 14){
            stringArr[phoneNumIndex] = digiBoxes[b].digit;
            phoneNumber.textContent = stringArr.join("");
            phoneNumIndex++;
        }
    }

    for(let f = 0; f < num; f++){
        if(digiBoxes[f].x < player.x && player.x < digiBoxes[f].x + digiBoxes[f].width+20 &&
            digiBoxes[f].y < player.y && player.y < digiBoxes[f].y + digiBoxes[f].height){
                l = f;
        }
        }
        if (l > -1){
            player.jump = false;
            player.y = digiBoxes[l].y;    
        }
}

function checkPlatformColl()
{
    let i = -1;
    for(let g = 0; g < num; g++){
    if(platforms[g].x < player.x && player.x < platforms[g].x + platforms[g].width+20 &&
        platforms[g].y < player.y && player.y < platforms[g].y + platforms[g].height){
            i = g;
    }
}
    if (i > -1){
        player.jump = false;
        player.y = platforms[i].y;    
    }
}

function checkSubBoxCollision()
{
    let m = -1;
    if(677 < player.x  && player.x < 677 + (53*2) &&
        player.y <= 100 + (19*2.3) && player.y >= 100 + 19 + player.yVel
        && player.yVel < 0){
                m  = 0;
    }

    if (m > -1)
    {  
        player.yVel = 0;
        if(phoneNumIndex === 14){
        subMsg = `Your number is ${phoneNum.textContent}, you will receive a call shortly(Your player will be reset momentarily)`;
        }

    }
}

function reset()
{
    player.x = 30;
    player.y = 150;
    player.xVel = 0;
    player.yVel = 0;
    phoneNumber.textContent ="(___)-___-____";
    subMsg = "";
    phoneNumIndex = 0;
}


function loopgamePlay()
{

    if(player.jump == false) 
    {
        player.xVel *= friction;
    } 
    else 
    {
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

    if(player.y > canvas.height)
    {
        player.x = 30;
        player.y = 150;
        player.xVel = 0;
        player.yVel = 0;
        phoneNumber.textContent = "(___)-___-____"
        phoneNumIndex = 0;
    }


    checkPlatformColl();
    checkBoxCollision();
    checkSubBoxCollision();
    createCanvas();
    createPlayer();
    renderPlatform();
    renderDigiBoxes();
    renderSubmitBox();
    checkBoxCollision();
    
}

    canvas=document.getElementById("canv");
    ctx=canvas.getContext("2d");
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    generatePlatforms();
    generateDigiBoxes();
    document.addEventListener("keydown",keyPress);
    document.addEventListener("keyup",keyRelease);
    resetBtn.addEventListener("click", reset);
    setInterval(loopgamePlay,22);