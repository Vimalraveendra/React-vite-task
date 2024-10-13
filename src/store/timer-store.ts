import { create } from "zustand";
import { devtools, } from "zustand/middleware";
import { createSelectors } from "./create-selector";


     export const INITIAL_STATE={
       time:0,
       timerActive:false,
     }
        export interface ITimerStore{
          time:number;
          timerActive:boolean;
          setTime:()=>void;
          setTimerActive:(value:boolean)=>void;
          setResetTime:()=>void;

        }
        export const useTimerStore = create(
                devtools<ITimerStore>((set)=>({
                       ...INITIAL_STATE,
                       setTime:()=>set((state)=>({...state,time:state.time+1,})),
                      setTimerActive:(value:boolean)=>set((state)=>({...state, timerActive:value})),
                      setResetTime:()=>set((state)=>({...state,time:0}))
                })
                ))  


                export const useTimerSelectors = createSelectors(useTimerStore)