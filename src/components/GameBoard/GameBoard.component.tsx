import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTilesSelectors } from "../../store/tile-store";
import { useHomeSelectors } from "../../store/home-store";
import { useTimerSelectors } from "../../store/timer-store";

import { TILE_IMAGES } from "../../utils/ImageData";

import Tile from "../Tile/Tile.component";
import Timer from "../Timer/Timer.component";


const GameBoard = () => {
  const tiles = useTilesSelectors.use.tiles()
  const firstSelectedTile = useTilesSelectors.use.firstSelectedTile()
  const secondSelectedTile= useTilesSelectors.use.secondSelectedTile();
  const setTiles = useTilesSelectors.use.setTiles();

  const setResetAttempt =useTilesSelectors.use.setResetAttempt();
  const setDisabled= useTilesSelectors.use.setDisabled();
  const setWon = useTilesSelectors.use.setWon();
  const setResetWon = useTilesSelectors.use.setResetWon();
  const seUpdateTiles = useTilesSelectors.use.setUpdateTiles();
  const won = useTilesSelectors.use.won();
  const attempts= useTilesSelectors.use.attempts();

  const name= useHomeSelectors.use.name();
  const date= useHomeSelectors.use.date();
  const setDate = useHomeSelectors.use.setDate();
  const gameLevel = useHomeSelectors.use.gameLevel();
  const gameLevelValue = useHomeSelectors.use.gameLevelValue();

  const setTimerActive = useTimerSelectors.use.setTimerActive();
  const time = useTimerSelectors.use.time();
  const setResetTime = useTimerSelectors.use.setResetTime();

 
  const navigate = useNavigate();

  const shuffleCards = ()=>{
    const filteredTileImages = TILE_IMAGES.filter(
      (_, index) => index < gameLevelValue
    );
  const shuffledCards = [...filteredTileImages, ...filteredTileImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id:Math.random()  }));
    setResetAttempt(0)
     setTiles(shuffledCards)
    setResetWon()
  }
    

    useEffect(() => {
      if (firstSelectedTile && secondSelectedTile) {
        setDisabled(true);
        if (firstSelectedTile.src === secondSelectedTile.src) {
          setWon();
          seUpdateTiles(firstSelectedTile)
          setResetAttempt(attempts+1)
        } else {
          setTimeout(() => {
            setResetAttempt(attempts+1);
          }, 1000);
        }
      }
    }, [firstSelectedTile,secondSelectedTile]);
  
 

 
  useEffect(() => {
    if (tiles.length > 0 && won > 0) {
      if (tiles.length === won * 2) {
        const gamesData = JSON.parse(localStorage.getItem("gamesHistory")|| '{}');
        if (gamesData !== null && gamesData.length > 0) {
          const newData = [...gamesData, { name, attempts, time, date, gameLevel }];
          localStorage.setItem("gamesHistory", JSON.stringify(newData));
        } else {
          localStorage.setItem(
            "gamesHistory",
            JSON.stringify([{ name, attempts, time, date, gameLevel }])
          );
        }

        const timeoutId = setTimeout(() => {
          navigate("/game_end");
          setResetWon();
        }, 2000);
        setTimerActive(false);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [won]);

  useEffect(() => {
    shuffleCards();
    setResetTime();
    setTimerActive(true)
    setDate();
  }, []);


  return(
    <div className="App">
          <h1>Magic Match</h1>
          <div className="moves-container">
          <p>Attempts: {attempts}</p>
            <Timer/>
            <p>{name}</p>
          </div>
          <div className="card-grid">
          <Tile/>
          </div>
      </div>
  )
};

export default GameBoard;
