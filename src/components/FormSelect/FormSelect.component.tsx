

import CaretDownArrow from "../../assets/caret-down.svg";
import { useHomeSelectors } from "../../store/home-store";
import { Tile_Levels } from "../../utils/tileLevelData";
import "./FormSelect.styles.css"


const FormSelect= () => {
    const gameLevel = useHomeSelectors.use.gameLevel();
    const setGameLevel= useHomeSelectors.use.setGameLevel()
    const toggleDropdownList = useHomeSelectors.use.toggleDropdownList();
    const setToggleDropdownList = useHomeSelectors.use.setToggleDropdownList();
    const error = useHomeSelectors.use.error();
    const setError = useHomeSelectors.use.setError();
    const setGameLevelValue= useHomeSelectors.use.setGameLevelValue()

    const setHandleToggleDropdownList = ()=>{
       setToggleDropdownList();
    }

    const  handleSetGameLevel = (e:React.SyntheticEvent<HTMLLIElement>)=>{
           if(error){
            setError()
           }
            setGameLevel(e.currentTarget.textContent  as string)
            setGameLevelValue(e.currentTarget.value)
            setToggleDropdownList()
        }
      
  return (
    <div className="form-select-container">
        <fieldset>
            <legend>Game Level</legend>
            <div className="form-placeholder-container" onClick={setHandleToggleDropdownList} >
                <input  placeholder="Select" value={gameLevel}  readOnly/>
                <img src={CaretDownArrow} />
                </div>
        </fieldset>
        {
           toggleDropdownList &&
            <ul className="dropdown-list-container">
            {
                Tile_Levels.map(({level,value,uuid})=>{
                   return <li className="dropdown-select-list" key={uuid} onClick={handleSetGameLevel} value={value}>
                   <span>{level}</span>
                   </li>
                })
            }
        </ul> 
        }
        
    </div>
);
}

export default FormSelect