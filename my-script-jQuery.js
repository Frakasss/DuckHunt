$(function() {
	var tableau = [ ['images/Duck_ToRight001.png','images/Duck_ToRight002.png','images/Duck_ToRight003.png','images/Duck_ToRight002.png'],
			['images/Duck_ToLeft001.png' ,'images/Duck_ToLeft002.png' ,'images/Duck_ToLeft003.png' ,'images/Duck_ToLeft002.png'],
			['images/Duck_Shot.png','images/Duck_Shot.png','images/Duck_Shot.png','images/Duck_Shot.png','images/Duck_Shot.png'],
			['images/Duck_Dead001.png' ,'images/Duck_Dead002.png' ,'images/Duck_Dead003.png' ,'images/Duck_Dead004.png']];

	/*image, coord-x, coord-y*/
	var animDog = [ ['images/Empty.png',0,600],
			['images/Dog001.png',0,336],
			['images/Dog002.png',5,336],
			['images/Dog003.png',10,336],
			['images/Dog001.png',15,336],
			['images/Dog002.png',20,336],
			['images/Dog003.png',25,336],
			['images/Dog001.png',30,336],
			['images/Dog002.png',35,336],
			 ['images/Dog003.png',40,336],
			['images/Dog001.png',45,336],
			['images/Dog002.png',50,336],
			['images/Dog003.png',55,336],
			['images/Dog001.png',60,336],
			['images/Dog002.png',65,336],
			['images/Dog003.png',70,336],
			['images/Dog003.png',70,336],
			['images/Dog004.png',64,336],
			['images/Dog004.png',64,336],
			 ['images/Dog003.png',70,336],
			['images/Dog003.png',70,336],
			['images/Dog004.png',64,336],
			['images/Dog004.png',64,336],
			['images/Dog003.png',70,336],
			['images/Dog003.png',70,336],
			['images/Dog004.png',64,336],
			['images/Dog004.png',64,336],
			['images/Dog001.png',75,336],
			['images/Dog002.png',80,336],
			 ['images/Dog003.png',85,336],
			['images/Dog001.png',90,336],
			['images/Dog002.png',95,336],
			['images/Dog003.png',100,336],
			['images/Dog001.png',105,336],
			['images/Dog002.png',110,336],
			['images/Dog003.png',115,336],
			['images/Dog001.png',120,336],
			['images/Dog002.png',125,336],
			['images/Dog003.png',130,336],
			 ['images/Dog001.png',135,336],
			['images/Dog002.png',140,336],
			['images/Dog003.png',145,336],
			['images/Dog003.png',145,336],
			['images/Dog004.png',139,336],
			['images/Dog004.png',139,336],
			['images/Dog003.png',145,336],
			['images/Dog003.png',145,336],
			['images/Dog004.png',139,336],
			['images/Dog004.png',139,336],
			 ['images/Dog003.png',145,336],
			['images/Dog003.png',145,336],
			['images/Dog004.png',139,336],
			['images/Dog004.png',139,336],
			['images/Dog005.png',139,324],
			['images/Dog005.png',139,324],
			['images/Dog005.png',139,324],
			['images/Dog005.png',139,324],
			['images/Dog006.png',150,300],
			['images/Dog006.png',160,280],
			 ['images/Dog006.png',170,260],
			['images/Dog006.png',180,240],
			['images/Dog006.png',190,230],
			['images/Dog007.png',200,255],
			['images/Dog007.png',205,250],
			['images/Dog007.png',210,245],
			['images/Dog007.png',215,250],
			['images/Dog007.png',220,255],
			['images/Dog007.png',230,265],
			['images/Dog007.png',240,275],
			 ['images/Dog007.png',250,285],
			['images/Dog007.png',255,300],
			['images/Dog007.png',260,315],
			['images/Dog007.png',265,330],
			['images/Dog007.png',270,345],
			['images/Dog007.png',275,360]
			];


	/*x,y,direction-x/mort,direction-y,sprite,trajectoire,--typeCanard, timer, fear, */
	var canards = [ [384,400,0,0,0,1],[384,400,1,0,1,0],[100,400,0,0,0,2]
			];

	var trajectoires = [	[4,2],
				[2,4],
				[3,3]
			   ];


	var gameStep = 0;
	var nbDuck = 3;
	var nbDeadDuck = 0;
	var animation = 0;
	var score = 0;
	var shoot = 3;

	function myLoop(){
		switch(gameStep){
			case 0:
				calcDogAnim();
				drawDogAnim();
			break;

			case 1:
				drawDuck();
				drawDog();
				calcAnim();
				calcTrajectoire();
				drawBullets();
				drawScore();
			break;
		}
	}
	checkShoot();
	setInterval(myLoop,30);


	/*####################################################*/
	function checkShoot(){
		$("#canard01").mouseup(
			function(){
				if(canards[0][2]<2){
					score = score + 1000;
					shoot = shoot - 1;
				}
				canards[0][2]=2; 
			});  

		$("#canard02").mouseup(
			function(){
				if(canards[1][2]<2){
					score = score + 1000;
					shoot = shoot - 1;
				}
				canards[1][2]=2; 
			});
		$("#canard03").mouseup(
			function(){
				if(canards[2][2]<2){
					score = score + 1000;
					shoot = shoot - 1;
				}
				canards[2][2]=2; 
			});
		
		$("#background").mouseup(
			function(e){
				shoot = shoot - 1;
				e.preventDefault();
			});
		
	}

	/*####################################################*/
	function drawDuck(){
		for (var i = 0; i < nbDuck; i++) {
 			var tmpDuck = "000" + (i+1);
			$("#canard"+tmpDuck.substring(tmpDuck.length-2)).css({'left': canards[i][0]+'px', 'top': canards[i][1]+'px'});
			$("#canard"+tmpDuck.substring(tmpDuck.length-2)).attr("src", tableau[canards[i][2]][canards[i][4]/3]);
		}
	}
	/*####################################################*/
	function drawDog(){
		$("#dog01").attr("src", "images/Empty.png");
		$("#dog02").attr("src", "images/Empty.png");
		/*Gestion des canards morts*/
	}

	/*####################################################*/
	function calcAnim(){
		for (var i = 0; i < nbDuck; i++) {
			canards[i][4] = canards[i][4]+1;
			if(canards[i][4] == 4*3){canards[i][4] = 0;}
		}
	}

	/*####################################################*/
	function calcTrajectoire(){
		for (var i = 0; i < nbDuck; i++) {
			if(canards[i][2]==0){
				if(canards[i][0] + trajectoires[canards[i][5]][0]>720){
					canards[i][0] = canards[i][0] - trajectoires[canards[i][5]][0];
					canards[i][2] = 1;
				}else{
					canards[i][0] = canards[i][0] + trajectoires[canards[i][5]][0];
				}
			}else{
				if(canards[i][2]==1){
					if(canards[i][0] - trajectoires[canards[i][5]][0]<5){
						canards[i][0] = canards[i][0] + trajectoires[canards[i][5]][0];
						canards[i][2] = 0;
					}else{
						canards[i][0] = canards[i][0] - trajectoires[canards[i][5]][0];
					}	
				}
			}

			if(canards[i][2]<2){
				if(canards[i][3]==0){
					if(canards[i][1]-trajectoires[canards[i][5]][1]<1){
						canards[i][1] = canards[i][1]+trajectoires[canards[i][5]][1];
						canards[i][3] = 1;
					}else{
						canards[i][1] = canards[i][1]-trajectoires[canards[i][5]][1];
					}
				}else{
					if(canards[i][1]+1>400){
						canards[i][1] = canards[i][1]-trajectoires[canards[i][5]][1];
						canards[i][3] = 0;
					}else{
						canards[i][1] = canards[i][1]+trajectoires[canards[i][5]][1];
					}
				}
			}else{
				if(canards[i][2]==2){
					canards[i][1] = canards[i][1]+3;
					if(canards[i][1]>400){
						canards[i][2]=3;
						nbDeadDuck = nbDeadDuck+1;
					}
				}
			}
		}
	}

	/*####################################################*/
	function drawDogAnim(){
		var tmpAnim = Math.floor(animation/3);
		if(animation<196){
			$("#dog01").css({'left': animDog[tmpAnim][1]+'px', 'top': animDog[tmpAnim][2]+'px'});
			$("#dog01").attr("src", animDog[tmpAnim][0]);
			$("#dog02").css({'left': animDog[tmpAnim][1]+'px', 'top': animDog[tmpAnim][2]+'px'});
			$("#dog02").attr("src", "images/Empty.png");
		}else{
			if(animation<226){
				$("#dog02").css({'left': animDog[tmpAnim][1]+'px', 'top': animDog[tmpAnim][2]+'px'});
				$("#dog01").attr("src", "images/Empty.png");
				$("#dog02").attr("src", animDog[tmpAnim][0]);
			}else{
				$("#dog01").attr("src", "images/Empty.png");
				$("#dog02").attr("src", "images/Empty.png");
			}
		}
	}

	/*####################################################*/
	function calcDogAnim(){
		animation = animation + 1;
		if(animation > 224){
			animation = 0;
			gameStep = 1;
		}
	}

	/*####################################################*/
	function drawBullets(){
		$("#bullet").attr("src", "images/Bullet_" + shoot + ".png");
	}

	/*####################################################*/
	function drawScore(){
		var tmpScore = "000000" + score;
		$("#score1").attr("src", "images/Score_" + tmpScore.substring(tmpScore.length-6,tmpScore.length-5) + ".png");
		$("#score2").attr("src", "images/Score_" + tmpScore.substring(tmpScore.length-5,tmpScore.length-4) + ".png");
		$("#score3").attr("src", "images/Score_" + tmpScore.substring(tmpScore.length-4,tmpScore.length-3) + ".png");
		$("#score4").attr("src", "images/Score_" + tmpScore.substring(tmpScore.length-3,tmpScore.length-2) + ".png");
		$("#score5").attr("src", "images/Score_" + tmpScore.substring(tmpScore.length-2,tmpScore.length-1) + ".png");
		$("#score6").attr("src", "images/Score_" + tmpScore.substring(tmpScore.length-1,tmpScore.length) + ".png");
	}


}




);