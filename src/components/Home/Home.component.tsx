import { useHomeSelectors } from "../../store/home-store";
import { useNavigate } from "react-router-dom";

import FormInput from "../FormInput/FormInput.component";
import FormSelect from "../FormSelect/FormSelect.component";
import Button from "../Button/Button.component";

import "./Home.styles.css"

const Home= () => {
  const name = useHomeSelectors.use.name();
  const setName=useHomeSelectors.use.setName();
  const error = useHomeSelectors.use.error();
  const gameLevel= useHomeSelectors.use.gameLevel();
  const setError = useHomeSelectors.use.setError();

  const navigate = useNavigate();

const handleOnChange=(e:React.SyntheticEvent<HTMLInputElement>)=>{
   if(error){
    setError()
   }
   setName(e.currentTarget.value)
}

const handleOnSubmit = (e:React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (name.length < 5 || !gameLevel) {
    setError();
    return;
  }
  navigate("/game_start");
};


  return (
    <div className="Home-container">
    <h1>Memory Game</h1>
    <form  className="form-container"  onSubmit={handleOnSubmit}>
      <FormInput
        legend="Enter Your Name"
        type="text"
        name="name"
        value={name}
        onChange={handleOnChange}
        required
      />
      <FormSelect/>
      {error && (
        <p className="error">
          Please enter a name-at least 5 characters long & game level
        </p>
      )}

      <Button type="submit" buttonType="secondary">
        Play
      </Button>
    </form>
  </div>
  )
}

export default Home