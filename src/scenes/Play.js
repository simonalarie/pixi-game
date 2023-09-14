import { Rectangle, Sprite, MovieClip } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';
import * as animate from '@pixi/animate';

import Wolf from '../animations/Wolf.js';
import Character from '../animations/Character.js';
import Cows from '../animations/Cows.js';
import Cow from '../animations/Cow.js';
import Worm from '../animations/Worm.js';

export default class Play extends Scene {
  constructor() {
    super();
    this.toggle = false;
    this.wolf = null;
    this.character = null;
  }
  async onCreated() {
    // create a sprite with the gamepad asset as texture and add it to the stage
    const btn = Sprite.from('gamepad');

    this.addChild(btn);
    btn.width = 50;
    btn.height = 50;
    btn.x = 10;
    btn.y = 200 - 50 - 10;
    btn.anchor.set(0.5);
    btn.interactive = true;
    btn.buttonMode = true;
    btn.on('pointerdown', () => {
      this.worm.gotoAndPlay('play_looped');
    });

    /*
    const sprite = Sprite.from('gamepad');

    this.addChild(sprite);
    sprite.anchor.set(0.5);

    gsap.to(sprite.scale, { x: 1.1, y: 1.1, duration: 1, repeat: -1, yoyo: true, ease: "power2.out" });
    
    animate.load(Wolf, () => {
      Wolf.setup(animate);
      this.wolf = new Wolf.lib.wolfTile();
      this.addChild(this.wolf);
      this.wolf.gotoAndStop('show');
    });

    animate.load(Character, () => {
      Character.setup(animate);
      this.character = new Character.stage();
      this.addChild(this.character);

      this.character.interactive = true;
      this.character.buttonMode = true;
      this.character.on('pointerdown', () => {
        if (!this.toggle) {
          this.wolf.gotoAndPlay('show');
        } else {
          this.wolf.gotoAndStop('show');
        }
        this.toggle = !this.toggle;
      });
    });
*/
    animate.load(Cows, () => {
      Cows.setup(animate);
      this.cows = new Cows.stage();
      this.addChild(this.cows);
/*
      for(let x = 1; x <= 5; x++) {
        this.cows.animation[`cows${x}`].visible = false;
      }
      const cows = this.cows.animation.cows1;
      const cow = this.cows.animation.cows1.cow1;

      cows.visible = true;
      cows.gotoAndStop(1);
      cow.gotoAndStop(1);
      cow.body.gotoAndStop(1);
      cow.spots.visible = false;
      */
    });
/*
    animate.load(Cow, () => {
      Cow.setup(animate);
      const cow = new Cow.lib.cow();
      console.log(cow.antialias);
      this.addChild(cow);

      //cow.gotoAndStop(1);
      cow.body.gotoAndStop(1);
      cow.spots.visible = false;
      cow.scale.x = 5;
      cow.scale.y = 5;
      //cow.cacheAsBitmap = true;
    });
    */
    animate.load(Worm, () => {
      Worm.setup(animate);
      const wormStage = new Worm.stage();
      this.addChild(wormStage);

      const worm = wormStage.worm1;
      worm.gotoAndStop(1);
      worm.scale.x = 2;
      worm.scale.y = 2;

      this.worm = worm;
    });

    
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
