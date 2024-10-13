import { useNavigate } from "react-router-dom";
import { useTilesSelectors } from "../../store/tile-store";
import { useTimerSelectors } from "../../store/timer-store";
import { useHomeSelectors } from "../../store/home-store";

import Button from "../Button/Button.component"
import "./GameResults.styles.css"

const GameResults=()=>{
  const  attempts = useTilesSelectors.use.attempts();
  const time = useTimerSelectors.use.time();

  const name = useHomeSelectors.use.name();
  const date = useHomeSelectors.use.date();

  
    const navigate = useNavigate()

    const handleLogout=()=>{
        navigate("/")
    }

    const handleNewGame=()=>{
        navigate("/game_start")
    }
    return (
        <div className="Home-container">
          <h1>Memory Game</h1>
           <div className="results-container">
             <div className="results-header">
              <h2>Hi {name}</h2>
              <h2>Game Finished</h2>
                <h3>Attempts:{attempts}</h3>
                 <h3>Time Duration:{time}</h3>
                 <h3>Date :{date}</h3>
             </div>
                 
           
           <div className="buttons-container">
           <Button type="button" buttonType="primary" onClick={handleNewGame}>New Game </Button>
           <Button type="button" buttonType="primary" onClick={handleLogout}>Logout</Button>
           </div>
           </div>
    </div>
    )
}


export default GameResults
