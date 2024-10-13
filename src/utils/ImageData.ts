
export  interface ITileImage{
    id?:number;
    src:string;
    matched:boolean;

}

export const TILE_IMAGES:ITileImage[] = [
    { src: "img/css.png", matched: false },
    { src: "img/html.png", matched: false },
    { src: "img/js.png", matched: false },
    { src: "img/nodejs.png", matched: false },
    { src: "img/react.png", matched: false },
    { src: "img/scss.png", matched: false },
    { src: "img/angular.png", matched: false },
    { src: "img/vue.png", matched: false },
    { src: "img/icon1.png", matched: false },
    { src: "img/icon2.png", matched: false },
    { src: "img/icon3.png", matched: false },
    { src: "img/icon4.png", matched: false },
  ];