
import { useTilesSelectors } from "../../store/tile-store";



import { ITileImage } from "../../utils/ImageData";


const Tile = () => {
    const tiles = useTilesSelectors.use.tiles()
    const firstSelectedTile = useTilesSelectors.use.firstSelectedTile()
    const secondSelectedTile= useTilesSelectors.use.secondSelectedTile();
    const setFirstSelectedTile = useTilesSelectors.use.setFirstSelectedTile();
    const setSecondSelectedTile = useTilesSelectors.use.setSecondSelectedTile();
    const disabled = useTilesSelectors.use.disabled();


      const handleSelectedTile = (tile:ITileImage) => {
        if(!disabled){
          if(firstSelectedTile){
            setSecondSelectedTile(tile) 
          }else{
            setFirstSelectedTile(tile);
          }
        }
      };


  
    return (
        <>
        {
        tiles.map((tile) => (
               <div className="card"  key={tile.id}>
                        <div className={`card-container ${
                                    tile=== firstSelectedTile ||
                                    tile=== secondSelectedTile ||
                                    tile.matched
                                  ? "flipped" : ""}`}>
                                <img src={tile.src} className="front" alt="card-front" />
                                <img
                                  src="img/cover.png"
                                  className="back"
                                  alt="card-back"
                                  onClick={()=>handleSelectedTile(tile)}
                                />
                      </div>
              </div>
        ))
    }   
</>
    );
  };
  
  export default Tile