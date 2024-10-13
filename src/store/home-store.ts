import { create } from "zustand";
import { devtools, } from "zustand/middleware";
import { createSelectors } from "./create-selector";


     export const INITIAL_STATE={
       name:"",
       error:false,
       gameLevel:"",
       gameLevelValue:0,
       toggleDropdownList:false,
       date:"",
     }
        export interface ITimerStore{
          name:string;
          toggleDropdownList:boolean;
          error:boolean;
          gameLevel:string;
          gameLevelValue:number;
          date:string,
          setName:(name:string)=>void;
          setGameLevel:(level:string)=>void;
          setGameLevelValue:(value:number)=>void;
          setError:()=>void;
          setToggleDropdownList:()=>void;
          setDate:()=>void;

        }
        export const useHomeStore = create(
                devtools<ITimerStore>((set)=>({
                       ...INITIAL_STATE,
                       setName:(name:string)=>set((state)=>({...state,name:name})),
                      setGameLevel:(level:string)=>set((state)=>({...state, gameLevel:level})),
                      setGameLevelValue:(value:number)=>set((state)=>({...state, gameLevelValue:value})),
                      setError:()=>set((state)=>({...state, error:!state.error})),
                      setToggleDropdownList:()=>set((state)=>({...state, toggleDropdownList:!state.toggleDropdownList})),
                      setDate:()=>set((state)=>({...state, date:new Date().toLocaleDateString("en-GB")})),
                })
                ))  


                export const useHomeSelectors = createSelectors(useHomeStore)