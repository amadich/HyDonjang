class loading extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}
	preload() {
            var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 320, 50);
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(250, 280, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
            /*
            this.load.image('logo', 'zenvalogo.png');
            for (var i = 0; i < 100; i++) {
                this.load.image('logo'+i, 'zenvalogo.png');
            }
            */

            this.load.spritesheet("idle","/public/assets/idle.png",{
            	frameWidth:  483,
            	frameHeight: 690
            });

            this.load.spritesheet("fly","/public/assets/fly.png",{
            	frameWidth:  800,
            	frameHeight: 812
            });

            this.load.image("shapesBubble","/public/assets/shapesBubble.png");
            this.load.image("send","/public/assets/icons/send.png");
            this.load.audio("audio_world","/public/audio/OST_Into_the_Endless_Sky.mp3")
        }

        create() {
        	this.scene.start("join");
        }

}