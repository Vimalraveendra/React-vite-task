import { create } from "zustand";
import { devtools, } from "zustand/middleware";
import { createSelectors } from "./create-selector";
import { ITileImage } from "../utils/ImageData";


     export const INITIAL_STATE={
       tiles:[],
       attempts:0,
       firstSelectedTile:null,
       secondSelectedTile:null,
       disabled:false,
       won:0,
     }
        export interface ITilesStore{
          tiles:ITileImage[];
          attempts:number;
          firstSelectedTile:null|ITileImage;
          secondSelectedTile:null|ITileImage;
          disabled:boolean;
          won:number;
          setTiles:(tiles:ITileImage[])=>void;
          setFirstSelectedTile:(tile:ITileImage)=>void;
          setSecondSelectedTile:(tile:ITileImage)=>void;
          setResetAttempt:(num:number)=>void;
          setDisabled:(bool:boolean)=>void;
          setWon:()=>void;
          setResetWon:()=>void;
          setUpdateTiles:(firstSelectedTile:ITileImage)=>void;

        }
        export const useTilesStore = create(
                devtools<ITilesStore>((set)=>({
                       ...INITIAL_STATE,
                       setTiles:(tiles:ITileImage[])=>set((state)=>({...state,tiles:tiles,})),
                      setFirstSelectedTile:(tile:ITileImage)=>set((state)=>({...state,firstSelectedTile:tile})),
                      setSecondSelectedTile:(tile:ITileImage)=>set((state)=>({...state,secondSelectedTile:tile})),
                      setResetAttempt:(num:number)=>set((state)=>({...state,firstSelectedTile:null,secondSelectedTile:null,attempts:num,disabled:false })),
                      setDisabled:(bool:boolean)=>set((state)=>({...state,disabled:bool})),
                      setWon:()=>set((state)=>({...state,won:state.won+1})),
                      setResetWon:()=>set((state)=>({...state,won:0})),
                      setUpdateTiles:(firstSelectedTile:ITileImage)=>set((state)=>({...state,tiles:state.tiles.map((tile)=>tile.src === firstSelectedTile.src ? { ...tile, matched: true } : tile )}))
                })
                ))  


                export const useTilesSelectors = createSelectors(useTilesStore)