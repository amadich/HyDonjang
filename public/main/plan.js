class plan extends Phaser.Scene {
	constructor() {
		super("join")
	}
	create() {
		/*
this.sound.pauseOnBlur = false;
this.sound.play("audio_world",{
	loop: true
});
*/

		idle = this.add.sprite(200,300,"idle").setScale(.2);
	this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 1 }),
    frameRate: 3,
    repeat: -1
	});		

	idle.anims.play("walk",true);

	// Fly
	fly = this.add.sprite(500,300,"idle").setScale(.1);
	fly.flipX = true;
	fly.alpha = 1;

	this.anims.create({
    key: 'fly',
    frames: this.anims.generateFrameNumbers('fly', { start: 0, end: 7 }),
    frameRate: 15,
    repeat: -1
	});		

	fly.anims.play("fly",true);

	fly.setVisible(true);

	fly.setInteractive()
	fly.on("pointerdown",()=>{
		console.log("Write...");
	})


	shapesBubbleplayer = this.add.image(200,250,"shapesBubble").setScale(0);

	
	shapesBubble = this.add.image(500,250,"shapesBubble").setScale(0);
	shapesBubble.flipX = true;


	this.tweens.add({
        targets: shapesBubble,
        yoyo: false,
        scale: 1,
        repeat: 0,
        duration: 200
    });



	let inpute = document.getElementById("myText");
	inpute.style.width = "300px";
		this.add.dom(300,550,inpute);  
	chat = this.add.text(450,230,"Hello",{
		color: "#222"
	});


	


	send = this.add.image(500,550,"send").setScale(.0800);

	//send.setTint = 0x440044;
	send.setInteractive();
	
	send.on("pointerdown",()=>{
chatplayer = this.add.text(150,230,inpute.value,{
		color: "#222"
		}).setScale(0);
		if (inpute.value === "" || inpute.value.length > 12) {
			chatplayer.setScale(0);
			shapesBubbleplayer.setScale(0);
			setTimeout(()=>{
				send.setVisible(true);
				chat.setScale(0);

			chat = this.add.text(440,230,"are you okey?",{
		color: "#222"
	}).setScale(1);
			},2000)

			chat.setScale(0);

			chat = this.add.text(450,230,"realy?",{
		color: "#222"
	}).setScale(1);
		}
		
		

		else {

chat.setScale(0);

			chat = this.add.text(450,230,"need help?",{
		color: "#222"
	}).setScale(1);


				if (inpute.value === "yes" || inpute.value === "no") {
					chat.setScale(0);
					chat = this.add.text(450,230,"okey ! 🤨",{
		color: "#222"
	}).setScale(1);



				}


				for(i=0;i<=inpute.value.length;i++) {
					if (inpute.value.charAt(i) === "p" || inpute.value === "play") {
						chat.setScale(0);
					chat = this.add.text(450,230,"😀 not!",{
		color: "#222"
	}).setScale(1);


					}
				}



			this.tweens.add({
        targets: shapesBubbleplayer,
        yoyo: false,
        scale: 1,
        repeat: 0,
        duration: 200
    });
this.tweens.add({
        targets: chatplayer,
        yoyo: false,
        scale: 1,
        repeat: 0,
        duration: 100
    });


	setTimeout(()=>{
		this.tweens.add({
        targets: shapesBubbleplayer,
        yoyo: false,
        scale: 0,
        repeat: 0,
        duration: 200
    });
this.tweens.add({
        targets: chatplayer,
        yoyo: false,
        scale: 0,
        repeat: 0,
        duration: 100
    });
	send.setVisible(true);
	},3000)
		}
	

	inpute.value = "";
	send.setVisible(false);
	});


this.input.setDefaultCursor('url(public/assets/icons/cursor.cur), pointer');
this.input.keyboard.on('keydown-ENTER', () => {
        console.log('Hello from the A Key!');



        chatplayer = this.add.text(150,230,inpute.value,{
		color: "#222"
		}).setScale(0);
		if (inpute.value === "" || inpute.value.length > 12) {
			chatplayer.setScale(0);
			shapesBubbleplayer.setScale(0);
			setTimeout(()=>{
				send.setVisible(true);
				chat.setScale(0);

			chat = this.add.text(440,230,"are you okey?",{
		color: "#222"
	}).setScale(1);
			},2000)

			chat.setScale(0);

			chat = this.add.text(450,230,"realy?",{
		color: "#222"
	}).setScale(1);
		}
		
		

		else {

chat.setScale(0);

			chat = this.add.text(450,230,"need help?",{
		color: "#222"
	}).setScale(1);


				if (inpute.value === "yes" || inpute.value === "no") {
					chat.setScale(0);
					chat = this.add.text(450,230,"okey ! 🤨",{
		color: "#222"
	}).setScale(1);



				}


				for(i=0;i<=inpute.value.length;i++) {
					if (inpute.value.charAt(i) === "p" || inpute.value === "play") {
						chat.setScale(0);
					chat = this.add.text(450,230,"😀 not!",{
		color: "#222"
	}).setScale(1);


					}
				}



			this.tweens.add({
        targets: shapesBubbleplayer,
        yoyo: false,
        scale: 1,
        repeat: 0,
        duration: 200
    });
this.tweens.add({
        targets: chatplayer,
        yoyo: false,
        scale: 1,
        repeat: 0,
        duration: 100
    });


	setTimeout(()=>{
		this.tweens.add({
        targets: shapesBubbleplayer,
        yoyo: false,
        scale: 0,
        repeat: 0,
        duration: 200
    });
this.tweens.add({
        targets: chatplayer,
        yoyo: false,
        scale: 0,
        repeat: 0,
        duration: 100
    });
	send.setVisible(true);
	},3000)
		}
	

	inpute.value = "";
	send.setVisible(false);




    });
	
	}

}
