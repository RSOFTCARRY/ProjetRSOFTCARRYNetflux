import narcos from "../assets/narcos.png";
import logoNarcos from "../assets/logoNarcos.svg";
import description from "../assets/description.png";
import btnPlay from "../assets/btn-play.png";
import btnMyList from "../assets/btn-my-list.png";

import "./Hero.css";


function Hero() {
    return (

<hero>
    <div>
        <div className="hero">
            <img className="narcos" src={narcos} alt="narcos" />
            <img className="logoNarcos" src={logoNarcos} alt="logoNarcos" />
            <img className="description" src={description} alt="description" />
            <img className="btnPlay" src={btnPlay} alt="btnPlay" />
            <img className="btnMyList" src={btnMyList} alt="btnMyList" />
      
        
        {/* <div className="description">

            <p>Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.</p>
        </div> */}
        </div>
        </div>
        



</hero>






    )}

    export default Hero;