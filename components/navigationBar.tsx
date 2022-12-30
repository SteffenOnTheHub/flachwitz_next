import { IonIcon } from '../node_modules/@ionic/react' 
import { arrowBack, arrowForward, scan } from 'ionicons/icons';

import Link from 'next/link'

interface NavigationBarProps {
  previousJokeUrl: string;
  randomJokeUrl: string;
  nextJokeUrl: string;
}


function NavigationBarComponent(props: NavigationBarProps) {    
    return (        
        <div id="joke-navigation-button-container">         
          <Link href={props.previousJokeUrl} legacyBehavior>
            <a className="icon-button"><IonIcon icon={arrowBack}/></a>
          </Link>
          
          <Link href={props.randomJokeUrl} legacyBehavior>
            <a className="icon-button"><IonIcon icon={scan}/></a>
          </Link>

          <Link href={props.nextJokeUrl} legacyBehavior>
            <a className="icon-button"><IonIcon icon={arrowForward}/></a>
          </Link>
        </div>     
    )
}
export default NavigationBarComponent