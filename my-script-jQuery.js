$(function() {
	/*https://downloads.khinsider.com/game-soundtracks/album/duck-hunt*/
		
	var tableau = [ ['images/Duck_ToRight001.png',	 'images/Duck_ToRight002.png',	 'images/Duck_ToRight003.png',	 'images/Duck_ToRight002.png'],
			['images/Duck_ToLeft001.png',	 'images/Duck_ToLeft002.png',	 'images/Duck_ToLeft003.png' ,	 'images/Duck_ToLeft002.png'],
			['images/Duck_ToRightTop001.png','images/Duck_ToRightTop002.png','images/Duck_ToRightTop003.png','images/Duck_ToRightTop002.png'],
			['images/Duck_ToLeftTop001.png', 'images/Duck_ToLeftTop002.png', 'images/Duck_ToLeftTop003.png' ,'images/Duck_ToLeftTop002.png'],
			['images/Duck_FlyAway001.png', 	 'images/Duck_FlyAway002.png', 	 'images/Duck_FlyAway003.png' ,	 'images/Duck_FlyAway002.png'],
			['images/Duck_Shot.png',	 'images/Duck_Shot.png',	 'images/Duck_Shot.png',	 'images/Duck_Shot.png'],
			['images/Duck_Dead001.png',	 'images/Duck_Dead002.png',	 'images/Duck_Dead001.png' ,	 'images/Duck_Dead002.png'],

			['images/Duck_ToRight101.png',	 'images/Duck_ToRight102.png',	 'images/Duck_ToRight103.png',	 'images/Duck_ToRight102.png'],
			['images/Duck_ToLeft101.png',	 'images/Duck_ToLeft102.png',	 'images/Duck_ToLeft103.png' ,	 'images/Duck_ToLeft102.png'],
			['images/Duck_ToRightTop101.png','images/Duck_ToRightTop102.png','images/Duck_ToRightTop103.png','images/Duck_ToRightTop102.png'],
			['images/Duck_ToLeftTop101.png', 'images/Duck_ToLeftTop102.png', 'images/Duck_ToLeftTop103.png' ,'images/Duck_ToLeftTop102.png'],
			['images/Duck_FlyAway101.png', 	 'images/Duck_FlyAway102.png', 	 'images/Duck_FlyAway103.png' ,	 'images/Duck_FlyAway102.png'],
			['images/Duck_Shot1.png',	 'images/Duck_Shot1.png',	 'images/Duck_Shot1.png',	 'images/Duck_Shot1.png'],
			['images/Duck_Dead101.png',	 'images/Duck_Dead102.png',	 'images/Duck_Dead101.png' ,	 'images/Duck_Dead102.png'],

			['images/Duck_ToRight201.png',	 'images/Duck_ToRight202.png',	 'images/Duck_ToRight203.png',	 'images/Duck_ToRight202.png'],
			['images/Duck_ToLeft201.png',	 'images/Duck_ToLeft202.png',	 'images/Duck_ToLeft203.png' ,	 'images/Duck_ToLeft202.png'],
			['images/Duck_ToRightTop201.png','images/Duck_ToRightTop202.png','images/Duck_ToRightTop203.png','images/Duck_ToRightTop202.png'],
			['images/Duck_ToLeftTop201.png', 'images/Duck_ToLeftTop202.png', 'images/Duck_ToLeftTop203.png' ,'images/Duck_ToLeftTop202.png'],
			['images/Duck_FlyAway201.png', 	 'images/Duck_FlyAway202.png', 	 'images/Duck_FlyAway203.png' ,	 'images/Duck_FlyAway202.png'],
			['images/Duck_Shot2.png',	 'images/Duck_Shot2.png',	 'images/Duck_Shot2.png',	 'images/Duck_Shot2.png'],
			['images/Duck_Dead201.png',	 'images/Duck_Dead202.png',	 'images/Duck_Dead201.png' ,	 'images/Duck_Dead202.png']
		];

	/*image, coord-x, coord-y*/
	var animDog = [ ['images/Empty.png',0,600],
			['images/Dog001.png',0,336],
			['images/Dog002.png',5,336],
			['images/Dog003.png',10,336],
			['images/Dog004.png',15,336],
			['images/Dog001.png',20,336],
			['images/Dog002.png',25,336],
			['images/Dog003.png',30,336],
			['images/Dog004.png',35,336],
			 ['images/Dog001.png',40,336],
			['images/Dog002.png',45,336],
			['images/Dog003.png',50,336],
			['images/Dog004.png',55,336],
			['images/Dog001.png',60,336],
			['images/Dog002.png',65,336],
			['images/Dog003.png',70,336],
			['images/Dog004.png',70,336],
			['images/Dog005.png',70,336],
			['images/Dog005.png',70,336],
			 ['images/Dog004.png',70,336],
			['images/Dog004.png',70,336],
			['images/Dog005.png',70,336],
			['images/Dog005.png',70,336],
			['images/Dog004.png',70,336],
			['images/Dog004.png',70,336],
			['images/Dog005.png',70,336],
			['images/Dog005.png',70,336],
			['images/Dog001.png',75,336],
			['images/Dog002.png',80,336],
			 ['images/Dog003.png',85,336],
			['images/Dog004.png',90,336],
			['images/Dog001.png',95,336],
			['images/Dog002.png',100,336],
			['images/Dog003.png',105,336],
			['images/Dog004.png',110,336],
			['images/Dog001.png',115,336],
			['images/Dog002.png',120,336],
			['images/Dog003.png',125,336],
			['images/Dog004.png',130,336],
			 ['images/Dog001.png',135,336],
			['images/Dog002.png',140,336],
			['images/Dog003.png',145,336],
			['images/Dog004.png',145,336],
			['images/Dog005.png',145,336],
			['images/Dog005.png',145,336],
			['images/Dog004.png',145,336],
			['images/Dog004.png',145,336],
			['images/Dog005.png',145,336],
			['images/Dog005.png',145,336],
			 ['images/Dog004.png',145,336],
			['images/Dog004.png',145,336],
			['images/Dog005.png',145,336],
			['images/Dog005.png',145,336],
			['images/Dog006.png',145,336],
			['images/Dog006.png',145,336],
			['images/Dog006.png',145,336],
			['images/Dog006.png',145,336],
			['images/Dog007.png',150,300],
			['images/Dog007.png',160,270],
			 ['images/Dog007.png',170,240],
			['images/Dog007.png',180,210],
			['images/Dog007.png',190,180],
			['images/Dog008.png',200,180],
			['images/Dog008.png',210,200],
			['images/Dog008.png',220,220],
			['images/Dog008.png',230,240],
			['images/Dog008.png',240,260],
			['images/Dog008.png',250,280],
			['images/Dog008.png',260,300],
			 ['images/Dog008.png',270,320],
			['images/Dog008.png',280,340],
			['images/Dog008.png',290,360],
			['images/Dog008.png',300,380],
			['images/Dog008.png',310,400],
			['images/Dog008.png',320,420]
			];
	var animDog2OK=[['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,360],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,355],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,350],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,345],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,340],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,335],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,330],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,325],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,320],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,315],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,310],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,305],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,300],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,295],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,290],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,285],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,280],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,275],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,270],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,265],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,260],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,255],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,250],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,250],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,250],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,250],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,250],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,250],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,255],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,260],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,265],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,270],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,275],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,280],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,285],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,290],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,295],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,300],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,305],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,310],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,315],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,320],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,325],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,330],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,335],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,340],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,345],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,350],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,355],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,360],
			['images/Dog0100.png','images/Dog0101.png','images/Dog0102.png',275,360]
			];

	var animDog2KO=[['images/Dog011.png',275,360],
			['images/Dog011.png',275,355],
			['images/Dog012.png',275,350],
			['images/Dog012.png',275,345],
			['images/Dog011.png',275,340],
			['images/Dog011.png',275,335],
			['images/Dog012.png',275,330],
			['images/Dog012.png',275,325],
			['images/Dog011.png',275,320],
			['images/Dog011.png',275,315],
			['images/Dog012.png',275,310],
			['images/Dog012.png',275,305],
			['images/Dog011.png',275,300],
			['images/Dog011.png',275,295],
			['images/Dog012.png',275,290],
			['images/Dog012.png',275,285],
			['images/Dog011.png',275,280],
			['images/Dog011.png',275,275],
			['images/Dog012.png',275,270],
			['images/Dog012.png',275,265],
			['images/Dog011.png',275,260],
			['images/Dog011.png',275,255],
			['images/Dog012.png',275,250],
			['images/Dog012.png',275,250],
			['images/Dog011.png',275,250],
			['images/Dog011.png',275,250],
			['images/Dog012.png',275,250],
			['images/Dog012.png',275,250],
			['images/Dog011.png',275,255],
			['images/Dog011.png',275,260],
			['images/Dog012.png',275,265],
			['images/Dog012.png',275,270],
			['images/Dog011.png',275,275],
			['images/Dog011.png',275,280],
			['images/Dog012.png',275,285],
			['images/Dog012.png',275,290],
			['images/Dog011.png',275,295],
			['images/Dog011.png',275,300],
			['images/Dog012.png',275,305],
			['images/Dog012.png',275,310],
			['images/Dog011.png',275,315],
			['images/Dog011.png',275,320],
			['images/Dog012.png',275,325],
			['images/Dog012.png',275,330],
			['images/Dog011.png',275,335],
			['images/Dog011.png',275,340],
			['images/Dog012.png',275,345],
			['images/Dog012.png',275,350],
			['images/Dog011.png',275,355],
			['images/Dog011.png',275,360],
			['images/Dog011.png',275,360]
			];


	/*1 ligne = 1 lvl*/
	/*x,y,direction-x/mort,direction-y,animationSprite,trajectoire,timerTrajectoire,typeCanard */
	/*direction-x: 0 gauche, 1 droite, 2 ,3, 4:flyAway, 5:shot, 6:deadFall*/
	var canards = [	[384,400,0,0,0,1,0,0],
			[384,400,1,0,1,0,0,1],
			[100,400,0,0,0,2,0,2],
			[400,400,0,0,0,15,0,1],
			[600,400,0,0,0,10,0,2],
			[100,400,0,0,0,8,0,0],
			[250,400,0,0,0,13,0,2],
			[425,400,0,0,0,12,0,1],
			[200,400,0,0,0,6,0,2]
			];

	/*mvt-x,mvt-y,timer*/
	var trajectoires = [	 [8,4,250],
				[4,8,250],
				[6,6,250],
				[9,2,250],
				[8,4,500],
				 [4,8,500],
				[6,6,500],
				[9,2,500],
				[8,4,750],
				[4,8,750],
				 [6,6,750],
				[9,2,750],
				[8,4,1000],
				[4,8,1000],
				[6,6,1000],
				 [9,2,1000]
			   ];


	var gameStep = 100;
	var animation = 0;
	var score = 0;
	var shoot = 3;
	var levelProgress = [1,1,1,1,1,1,1,1,1]; /*0=alive, 1=neutre, 2=dead,*/
	var gameSpeed = 30;
	var currentLevel = 0;
	var globalLevel = 1;
	playSound('01');
	



	function myLoop(){
		switch(gameStep){
			case 0:
				calcDogAnim();
				drawDogAnim();
				drawPanel();
			break;

			case 1:
				calcAnim();
				calcTrajectoire();
				calcResultAnim();
				drawDuck();
				drawBullets();
				drawResult();
				drawScore();
				checkGameEnd();
			break;
			
			case 2:
				/*dead duck*/
				/*fly away*/
				calcAnim();
				calcTrajectoire();
				drawDuck();
				drawResult();
				drawScore();
				drawPanel();
			break;

			case 3:
				calcDogAnim2();
				drawDogAnim2();
				drawResult();
				drawScore();
				drawPanel();
			break;

			case 4:
				checkGameEnd();
				drawResult();
			break;


			case 100:
				/*Nothing to do*/
				/*Only check click*/
			break;

		}
	}

	checkShoot();
	setInterval(myLoop,gameSpeed);

/*+++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++     CHECKS     +++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++*/

	/*####################################################*/
	function checkShoot(){
			$("#canard").mouseup(
				function(){
					if(canards[currentLevel][2]<2 && gameStep==1){
						score = score + 250*(shoot);
						shoot = shoot - 1;
						levelProgress[currentLevel] = 0;
						canards[currentLevel][2]=5;
						playSound('10');
					}
					
				});  
		
			$("#background").mouseup(
				function(){
					if(gameStep==1){
						shoot = shoot - 1;
						playSound('10');
						
					}
				});

			$("#intro").mouseup(
				function(){
					if(gameStep==100){
						$("#intro").attr("src", "images/Empty.png");
						gameStep=0;
						stopSound('01');
						playSound('02');
					}
				});		
	}

	/*####################################################*/
	function checkGameEnd(){
		if(gameStep==1){
			/*Fly Away*/
			if(shoot==0 && levelProgress[currentLevel] == 1){
				levelProgress[currentLevel] = 2;
				gameStep=2;
				canards[currentLevel][2] = 4;
			}
		
			/*Duck is dead by shot*/
			if(levelProgress[currentLevel] == 0){
				gameStep=2;
				canards[currentLevel][2] = 5;
			}
		}

		if(gameStep==4){
			/*compter nb canard morts*/
			/*si nb canard morts < 4 => GAME OVER*/			
			
			/*Reinitialisation result*/
			for (var i = 0; i < 9; i++) {
				levelProgress[i]=1;
			}

			/*accelere le jeu*/
			if(gameSpeed-4>10){gameSpeed=gameSpeed-4;}

			shoot = 3;
			currentLevel = 0;
			globalLevel = globalLevel + 1;
			
			animation=0;
			
			canards = [	[384,400,0,0,0,1,0,0],
			[384,400,1,0,1,0,0,1],
			[100,400,0,0,0,2,0,2],
			[400,400,0,0,0,15,0,1],
			[600,400,0,0,0,10,0,2],
			[100,400,0,0,0,8,0,0],
			[250,400,0,0,0,13,0,2],
			[425,400,0,0,0,12,0,1],
			[200,400,0,0,0,6,0,2]
			];
			
			gameStep=0;
		}
	}

/*+++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++      ANIMS     +++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++*/

	/*####################################################*/
	function calcAnim(){
		canards[currentLevel][4] = canards[currentLevel][4]+1;
		if(canards[currentLevel][4] == 4*3){canards[currentLevel][4] = 0;}
	}

	/*####################################################*/
	function calcTrajectoire(){
		/*Calcul timer*/
		if(canards[currentLevel][2]<2){
			canards[currentLevel][6] = canards[currentLevel][6]+gameSpeed;
			var debug_CanardCounter = canards[currentLevel][6];
			var debug_CanardTrajectoire = canards[currentLevel][5];
			var debug_TrajectoireTimer = trajectoires[canards[currentLevel][5]][2];
			var debug_CanardSpeedMultiplicator = (((canards[currentLevel][7]*2)+2)%3)+1;
			var debug_totalTrajectoire = trajectoires[canards[currentLevel][5]][2]*((((canards[currentLevel][7]*2)+2)%3)+1);

			if(debug_CanardCounter>debug_totalTrajectoire){
				playSound('12');
				canards[currentLevel][6] = 0;
				canards[currentLevel][5] = Math.floor(Math.random() * 100) % 16;
				switch(canards[currentLevel][7]){
					case 0:	
					canards[currentLevel][3] = Math.floor(Math.random() * 100) % 2;	
					break;
					
					case 1: 
					canards[currentLevel][2] = Math.floor(Math.random() * 100) % 2; 
					break;

					case 2:
					canards[currentLevel][2] = Math.floor(Math.random() * 100) % 2;
					canards[currentLevel][3] = Math.floor(Math.random() * 100) % 2;
					break;
				}

			}else{
				if(canards[currentLevel][4]==0){playSound('09');}
				if(canards[currentLevel][4]==6){playSound('09');}
			}
		}


		/*Calcul coordonnée x*/
		if(canards[currentLevel][2]==0){
			if(canards[currentLevel][0] + trajectoires[canards[currentLevel][5]][0]>720){
				canards[currentLevel][0] = canards[currentLevel][0] - trajectoires[canards[currentLevel][5]][0];
				canards[currentLevel][2] = 1;
				playSound('12');
			}else{
				canards[currentLevel][0] = canards[currentLevel][0] + trajectoires[canards[currentLevel][5]][0];
			}
		}else{
			if(canards[currentLevel][2]==1){
				if(canards[currentLevel][0] - trajectoires[canards[currentLevel][5]][0]<5){
					canards[currentLevel][0] = canards[currentLevel][0] + trajectoires[canards[currentLevel][5]][0];
					canards[currentLevel][2] = 0;
					playSound('12');
				}else{
					canards[currentLevel][0] = canards[currentLevel][0] - trajectoires[canards[currentLevel][5]][0];
				}	
			}
		}
		
		/*Calcul coordonnée y*/
		if(canards[currentLevel][2]<2){
			if(canards[currentLevel][3]==0){
				if(canards[currentLevel][1]-trajectoires[canards[currentLevel][5]][1]<1){
					canards[currentLevel][1] = canards[currentLevel][1]+trajectoires[canards[currentLevel][5]][1];
					canards[currentLevel][3] = 1;
					/*playSound('12');*/
				}else{
					canards[currentLevel][1] = canards[currentLevel][1]-trajectoires[canards[currentLevel][5]][1];
				}
			}else{
				if(canards[currentLevel][1]+1>300){
					canards[currentLevel][1] = canards[currentLevel][1]-trajectoires[canards[currentLevel][5]][1];
					canards[currentLevel][3] = 0;
					/*playSound('12');*/
				}else{
					canards[currentLevel][1] = canards[currentLevel][1]+trajectoires[canards[currentLevel][5]][1];
				}
			}
		}else{
			if(canards[currentLevel][2]==6){
				canards[currentLevel][1] = canards[currentLevel][1]+6;
				if(canards[currentLevel][1]>400){
					gameStep=3;
					playSound('03');
				}
			}

			if(canards[currentLevel][2]==5){
				if(canards[currentLevel][4]==0){
					canards[currentLevel][2]=6;
					playSound('07');
					}
			}

			if(canards[currentLevel][2]==4){
				canards[currentLevel][1] = canards[currentLevel][1]-6;				
				if(canards[currentLevel][4]==0){playSound('09');}
				if(canards[currentLevel][4]==6){playSound('09');}
				if(canards[currentLevel][1]<-72){
					gameStep=3;
					playSound('11');
				}
			}
		}
	}

	/*####################################################*/
	function calcResultAnim(){
		animation = animation + 1;
		if(animation > 1){
			animation = 0;
		}
	}

	/*####################################################*/
	function calcDogAnim(){
		animation = animation + 1;
		if(animation==190){playSound('06');}		
		if(animation==200){playSound('06');}
		if(animation==210){playSound('06');}
		if(animation > 224){
			animation = 0;
			gameStep = 1;
		}
	}

	/*####################################################*/
	function calcDogAnim2(){
		animation = animation + 1;
		if(animation > 50){
			animation = 0;
			shoot=3;
			currentLevel = currentLevel + 1;
			if(currentLevel > 8){
				currentLevel = 0;
				gameStep = 4;
			}else{
				gameStep = 1;
			}
			
		}
	}

/*+++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++      DRAW      +++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++*/

	/*####################################################*/
	function drawDuck(){
		$("#canard").css({'left': canards[currentLevel][0]+'px', 'top': canards[currentLevel][1]+'px'});
		var duckDir = 0;
		var debug_canardTrajectoire = canards[currentLevel][5];
		var debug_trajectoireX = trajectoires[debug_canardTrajectoire][0];
		var debug_trajectoireY = trajectoires[debug_canardTrajectoire][1];
		if(debug_trajectoireX <= debug_trajectoireY && canards[currentLevel][3]==0 && canards[currentLevel][2]<2){duckDir = 2;}
		var debug_canardXdir = canards[currentLevel][2];
		var debug_canardType = canards[currentLevel][7];
		var debug_canardSprite = Math.floor(canards[currentLevel][4]/4);
		var debug_canardSelected = canards[currentLevel][2]+(7*canards[currentLevel][7]+duckDir);

		$("#canard").attr("src", tableau[debug_canardSelected][debug_canardSprite]);
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

	/*####################################################*/
	function drawResult(){
		for (var i = 0; i < 9; i++) {
			var j = i + 1;
			switch(levelProgress[i]){		
				case 0: $("#hit0"+ j).attr("src", "images/Hit_ok.png"); break;
				case 1: $("#hit0"+ j).attr("src", "images/Hit_ok.png");	break;
				case 2: $("#hit0"+ j).attr("src", "images/Hit_ko.png");	break;	
			}			
		}
		$("#hit0"+(currentLevel+1)).attr("src", "images/Hit_Empty.png");
	}

	/*####################################################*/
	function drawDogAnim(){
		var tmpAnim = Math.floor(animation/3);
		if(animation<196){
			$("#dog01").css({'left': animDog[tmpAnim][1]+'px', 'top': animDog[tmpAnim][2]+'px'});
			$("#dog01").attr("src", animDog[tmpAnim][0]);
			$("#dog02").css({'left': animDog[tmpAnim][1]+'px', 'top': animDog[tmpAnim][2]+'px'});
			$("#dog02").attr("src", animDog[tmpAnim][0]);
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
	function drawDogAnim2(){
		if(levelProgress[currentLevel] == 2){
			$("#dog02").css({'left': animDog2KO[animation][1]+'px', 'top': animDog2KO[animation][2]+'px'});
			$("#dog02").attr("src", animDog2KO[animation][0]);
		}

		if(levelProgress[currentLevel] == 0){
			$("#dog02").css({'left': animDog2OK[animation][3]+'px', 'top': animDog2OK[animation][4]+'px'});
			$("#dog02").attr("src", animDog2OK[animation][canards[currentLevel][7]]);
		}
	}

	/*####################################################*/
	function drawPanel(){
		if(gameStep==0){
			if(animation<120){
				var tmpLvl = "00" + globalLevel;
				$("#pannel").attr("src", "images/Panel_Round.png");
				$("#lvlnb01").attr("src", "images/Score_" + tmpLvl.substring(tmpLvl.length-2,tmpLvl.length-1) + ".png");
				$("#lvlnb02").attr("src", "images/Score_" + tmpLvl.substring(tmpLvl.length-1,tmpLvl.length) + ".png");
			}else{
				$("#pannel").attr("src", "images/Empty.png");
				$("#lvlnb01").attr("src", "images/Empty.png");
				$("#lvlnb02").attr("src", "images/Empty.png");
			}
		}

		if(gameStep==1){
			$("#pannel").attr("src", "images/Empty.png");
		}		

		if(gameStep==2){
			if(canards[currentLevel][2] == 4){
				$("#pannel").attr("src", "images/Panel_FlyAway.png");	
			}
		}

		if(gameStep==3){
			if(levelProgress[currentLevel] == 2){
				$("#pannel").attr("src", "images/Panel_FlyAway.png");
			}
		}		
	}
	
	/*+++++++++++++++++++++++++++++++++++++++++++++++*/
	/*++++++++++++++++      SOUND     +++++++++++++++*/
	/*+++++++++++++++++++++++++++++++++++++++++++++++*/

	/*####################################################*/
	function playSound(track){
		/*stopAllSound();*/
		switch (track){
			case '01':	
			$('#01-title-screen')[0].pause(); 
			$('#01-title-screen')[0].currentTime = 0;
			$('#01-title-screen')[0].play();
			break;
			
			case '02':	
			$('#02-duck-hunt-intro')[0].pause(); 
			$('#02-duck-hunt-intro')[0].currentTime = 0;
			$('#02-duck-hunt-intro')[0].play(); 
			break;
			
			case '03':	
			$('#04-got-duck-s-')[0].pause(); 
			$('#04-got-duck-s-')[0].currentTime = 0;
			$('#04-got-duck-s-')[0].play(); 
			break;
			
			case '04':	
			$('#05-round-clear')[0].pause(); 
			$('#05-round-clear')[0].currentTime = 0;
			$('#05-round-clear')[0].play(); 
			break;
			
			case '05':	
			$('#08-game-over')[0].pause(); 
			$('#08-game-over')[0].currentTime = 0;
			$('#08-game-over')[0].play(); 
			break;
			
			case '06':	
			$('#09-bark-sfx-')[0].pause(); 
			$('#09-bark-sfx-')[0].currentTime = 0;
			$('#09-bark-sfx-')[0].play(); 
			break;
			
			case '07':	
			$('#10-dead-duck-falls-sfx-')[0].pause(); 
			$('#10-dead-duck-falls-sfx-')[0].currentTime = 0;
			$('#10-dead-duck-falls-sfx-')[0].play(); 
			break;
			
			case '08':	
			$('#11-dead-duck-lands-sfx-')[0].pause(); 
			$('#11-dead-duck-lands-sfx-')[0].currentTime = 0;
			$('#11-dead-duck-lands-sfx-')[0].play(); 
			break;
			
			case '09':	
			$('#12-duck-flapping-sfx-')[0].pause(); 
			$('#12-duck-flapping-sfx-')[0].currentTime = 0;
			$('#12-duck-flapping-sfx-')[0].play(); 
			break;
			
			case '10':	
			$('#13-gunshot-sfx-')[0].pause(); 
			$('#13-gunshot-sfx-')[0].currentTime = 0;
			$('#13-gunshot-sfx-')[0].play(); 
			break;
			
			case '11':	
			$('#14-laugh-sfx-')[0].pause(); 
			$('#14-laugh-sfx-')[0].currentTime = 0;
			$('#14-laugh-sfx-')[0].play(); 
			break;
			
			case '12':	
			$('#15-quack-sfx-')[0].pause(); 
			$('#15-quack-sfx-')[0].currentTime = 0;
			$('#15-quack-sfx-')[0].play(); 
			break;	
		}
	}

		/*####################################################*/
	function stopSound(track){
		switch (track){
			case '01':	
			$('#01-title-screen')[0].pause(); 
			$('#01-title-screen')[0].currentTime = 0;
			break;
			
			case '02':	
			$('#02-duck-hunt-intro')[0].pause(); 
			$('#02-duck-hunt-intro')[0].currentTime = 0;
			break;
			
			case '03':	
			$('#04-got-duck-s-')[0].pause(); 
			$('#04-got-duck-s-')[0].currentTime = 0;
			break;
			
			case '04':	
			$('#05-round-clear')[0].pause(); 
			$('#05-round-clear')[0].currentTime = 0;
			break;
			
			case '05':	
			$('#08-game-over')[0].pause(); 
			$('#08-game-over')[0].currentTime = 0;
			break;
			
			case '06':	
			$('#09-bark-sfx-')[0].pause(); 
			$('#09-bark-sfx-')[0].currentTime = 0;
			break;
			
			case '07':	
			$('#10-dead-duck-falls-sfx-')[0].pause(); 
			$('#10-dead-duck-falls-sfx-')[0].currentTime = 0;
			break;
			
			case '08':	
			$('#11-dead-duck-lands-sfx-')[0].pause(); 
			$('#11-dead-duck-lands-sfx-')[0].currentTime = 0;
			break;
			
			case '09':	
			$('#12-duck-flapping-sfx-')[0].pause(); 
			$('#12-duck-flapping-sfx-')[0].currentTime = 0;
			break;
			
			case '10':	
			$('#13-gunshot-sfx-')[0].pause(); 
			$('#13-gunshot-sfx-')[0].currentTime = 0;
			break;
			
			case '11':	
			$('#14-laugh-sfx-')[0].pause(); 
			$('#14-laugh-sfx-')[0].currentTime = 0;
			break;
			
			case '12':	
			$('#15-quack-sfx-')[0].pause(); 
			$('#15-quack-sfx-')[0].currentTime = 0; 
			break;	
		}
	}

	/*####################################################*/
	function stopAllSound(){
		$('#01-title-screen')[0].pause(); 
		$('#01-title-screen')[0].currentTime = 0;
		$('#02-duck-hunt-intro')[0].pause();	
		$('#02-duck-hunt-intro')[0].currentTime = 0;
		$('#04-got-duck-s-')[0].pause();
		$('#04-got-duck-s-')[0].currentTime = 0;
		$('#05-round-clear')[0].pause();
		$('#05-round-clear')[0].currentTime = 0;
		$('#08-game-over')[0].pause();
		$('#08-game-over')[0].currentTime = 0;
		$('#09-bark-sfx-')[0].pause();
		$('#09-bark-sfx-')[0].currentTime = 0;
		$('#10-dead-duck-falls-sfx-')[0].pause();
		$('#10-dead-duck-falls-sfx-')[0].currentTime = 0;
		$('#11-dead-duck-lands-sfx-')[0].pause();
		$('#11-dead-duck-lands-sfx-')[0].currentTime = 0;
		/*$('#12-duck-flapping-sfx-')[0].pause();*/
		/*$('#12-duck-flapping-sfx-')[0].currentTime = 0;*/
		$('#13-gunshot-sfx-')[0].pause();
		$('#13-gunshot-sfx-')[0].currentTime = 0;
		$('#14-laugh-sfx-')[0].pause(); 
		$('#14-laugh-sfx-')[0].currentTime = 0;
		$('#15-quack-sfx-')[0].pause();
		$('#15-quack-sfx-')[0].currentTime = 0;
	}	
	
}


);