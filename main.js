canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
greencar_image_width=75;
greencar_image_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_image_x=5;
greencar_imagey=225;

function add() {
	//upload car, and background images on the canvas.
	background_imageTag=new Image();
    background_imageTag.onload=upload_background();
    background_imageTag.src=background_image;

    greencar_imageTag=new Image();
    greencar_imageTag.onload=uploadgreencar();
    greencar_imageTag.src=greencar_image;
}

function upload_background() {
	
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}



function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imageTag,greencar_image_x,greencar_imagey,greencar_image_width,greencar_image_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(greencar_imagey>=0){
        greencar_imagey=greencar_imagey-10;
        console.log("when up arrow is pressed, x="+greencar_image_x + " y="+greencar_imagey );
        upload_background();
        uploadgreencar();
    }
}

function down(){
    if(greencar_imagey<=500){
greencar_imagey=greencar_imagey+10;
console.log("when up arrow is pressed, x="+greencar_image_x + " y="+greencar_imagey );
upload_background();
uploadgreencar();
    }
}

function left(){
    if(greencar_image_x>=0){
        greencar_image_x=greencar_image_x-10;
        console.log("when up arrow is pressed, x="+greencar_image_x + " y="+greencar_imagey );
        upload_background();
        uploadgreencar();
    }
}

function right(){
    if(greencar_image_x<=700);
    greencar_image_x=greencar_image_x+10;
    console.log("when up arrow is pressed, x="+greencar_image_x + " y="+greencar_imagey );
    upload_background();
    uploadgreencar();
}



