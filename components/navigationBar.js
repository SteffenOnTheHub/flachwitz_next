import { IonIcon } from '../node_modules/@ionic/react' 
import { arrowBack, arrowForward, scan } from 'ionicons/icons';

function NavigationBarComponent(props) {    
    return (        
        <div id="joke-navigation-button-container">         
          <a className="icon-button" href="google.com"><IonIcon icon={arrowBack}/></a>
          <a className="icon-button" href="google.com"><IonIcon icon={scan}/></a>
          <a className="icon-button" href={`/jokes/${encodeURIComponent(props.nextJokeData.id)}`}><IonIcon icon={arrowForward}/></a>
        </div>     
    )
}
export default NavigationBarComponent