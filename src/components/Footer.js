import "../assets/footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";




function Footer() {
  return (

    <footer>
        
             
          <div className="logo">
          <img className="facebook" src={facebook} alt="facebook" />
          <img className="instagram" src={instagram} alt="instagram" />
          <img className="twitter" src={twitter} alt="twitter" />
          <img className="youtube" src={youtube} alt="youtube" />
          </div>
           {/* <div classcolonne0="colonne0"> */}
           <div className="contain">
              <nav className="navi">
                <a className="">
                  <a href="https://www.rsoftcarry.fr/">Audio & Sous Titre</a>
                </a>
                <a className="">
                  <a href="https://www.rsoftcarry.fr">Presse</a>
                  </a>
                <a className="">
                  <a href="https://www.rsoftcarry.fr">Confidentialité</a>
                  </a>
                <a className="">
                  <a href="https://www.rsoftcarry.fr">Nous Contacter</a>
                  </a>
          
                <div className="contour">
                <a className="">
                <a href="https://www.rsoftcarry.fr">Service Code</a>
                </a>
                </div>
                <a className="">© 1997-2018 Netflix, Inc.</a>
                
          
              </nav>
              
              <nav className="navi">
              <a className="">
              <a href="https://www.rsoftcarry.fr">Autodescription</a>
              </a>
              
              <a className="">
              <a href="https://www.rsoftcarry.fr">Relations Investisseurs</a>
              </a>
              <a className="">
              <a href="https://www.rsoftcarry.fr">Informations légales</a>
              </a>
              <a className=""></a>
              </nav>
              
              <nav className="navi">
              <a className="">
              <a href="https://www.rsoftcarry.fr">Centre d'Aide</a>
              </a>
              <a className="">
              <a href="https://www.rsoftcarry.fr">Recrutement</a>
              </a>
              <a className="">
              <a href="https://www.rsoftcarry.fr">Préférences de Cookies</a>
              </a>
              <a className=""></a>
              </nav>

              <nav className="navi">
              <a className="">
              <a href="https://www.rsoftcarry.fr">Cartes Cadeaux</a>
              </a>
              <a className="">
              <a href="https://www.rsoftcarry.fr">Conditions d'Utilisation</a>
              </a>
              <a className="">
              <a href="https://www.rsoftcarry.fr">Mentions Légales</a>
              </a>
              <a className=""></a>

          
              </nav>
                
              </div>

        



    </footer>



  )
}

export default Footer;
