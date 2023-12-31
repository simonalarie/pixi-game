import Application from './core/Application';
import * as PIXI from 'pixi.js';
import '@pixi/animate';

if (process.env.NODE_ENV === 'development') {
  // required for pixi dev tools to work
  window.PIXI = PIXI;
}

document.addEventListener('DOMContentLoaded', new Application());
