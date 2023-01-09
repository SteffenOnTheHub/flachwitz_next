import Layout from '../components/layout';

export default function About() {
  
    return (
      <Layout>
  
  
        <div id="about">
            <p>
                
                Quelle der Witze: &nbsp;   
                <a href="https://github.com/derphilipp/Flachwitze"> 
                {/* <ion-icon name="logo-github"></ion-icon> */}
                github.com/derphilipp/Flachwitze
                </a> 
            </p>

            <p>
                Source Code: &nbsp;
                <a href="https://github.com/SteffenOnTheHub/flachwitz_next"> 
                {/* <ion-icon name="logo-github"></ion-icon> */}
                https://github.com/SteffenOnTheHub/flachwitz_next
                </a> 
            </p>

            <p>
                Für Feedback und Fragen erstellt einfach ein Issue in Github.
            </p>
            
        </div>

      </Layout>
    );
  }