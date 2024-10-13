export interface ITileLevel{
    level:string;
    value:number;
    uuid:number;
}

export  const Tile_Levels:ITileLevel[] = [
    {
      level: "level1",
      value:4,
      uuid: 1,
    },
    {
      level: "level2",
      value:6,
      uuid: 2,
    },
    {
      level: "level3",
      value:8,
      uuid: 3,
    },
    {
      level: "level4",
      value:10,
      uuid: 4,
    },
  ];