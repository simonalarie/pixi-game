export default {
  view: {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xffffff,
    worldWidth: 550,
    worldHeight: 400,
    resizeTo: window,
    //centerOnResize: true,
    antialias: true,
    autoDensity: true,
    resolution: 2,
  },
  game: {
    width: 550,
    height: 400,
    drag: false,
    pinch: true,
    decelerate: true,
    wheel: true,
  },
  scenes: {
    Splash: {
      hideDelay: 0,
    },
  },
  assets: {
    root: '/',
  },
};
