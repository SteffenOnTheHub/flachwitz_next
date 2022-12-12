import { IonIcon } from '../node_modules/@ionic/react' 
import { arrowBack, arrowForward, scan } from 'ionicons/icons';

import Link from 'next/link'

function NavigationBarComponent(props) {    
    return (        
        <div id="joke-navigation-button-container">         
          <a className="icon-button" href="google.com"><IonIcon icon={arrowBack}/></a>
          <a className="icon-button" href="google.com"><IonIcon icon={scan}/></a>
          <Link href={props.nextJokeUrl} legacyBehavior>
            <a className="icon-button"><IonIcon icon={arrowForward}/></a>
          </Link>
        </div>     
    )
}
export default NavigationBarComponent