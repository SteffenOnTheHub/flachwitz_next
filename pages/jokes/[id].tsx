import { getJokeData, getPreviousJokeData, getNextJokeData, getAllJokeIds, getAllJokesData } from '../../lib/jokes';
import Layout from '../../components/layout';
import NavigationBar from '../../components/navigationBar';

export async function getStaticProps({ params }) {
    const jokeData = await getJokeData(params.id);
    const previousJokeData = await getPreviousJokeData(params.id);
    const nextJokeData = await getNextJokeData(params.id);
    
    const allJokes = getAllJokesData();
    const randomJokeData = allJokes[Math.floor(Math.random() * allJokes.length)];

    return {
      props: {
        jokeData,
        previousJokeData,
        nextJokeData,
        randomJokeData,
      },
    };
  }

  export async function getStaticPaths() {
    const paths = getAllJokeIds();
    return {
      paths,
      fallback: false,
    };
  }



  /*
  export default function Joke({ jokeData }) {
    return (
      <Layout>
       <div>
        <h1>{jokeData.id}</h1>
        <h1>{jokeData.joke}</h1>
       </div>
       </Layout>
    );
  }
  */

  export default function Joke(props) {
    return (
      <Layout>

        <div id="jokewrapper">

          {/* Text 
          <div id="joketext" class="card">
          {{ joke.text|linebreaksbr }}		
          </div>
          */}


          {/* Text */}
          <div id="joketext" className="card">
          {props.jokeData.joke}	
          </div>

          <div> . </div>
          
          <NavigationBar 
            previousJokeUrl={`/jokes/${encodeURIComponent(props.previousJokeData.id)}`} 
            nextJokeUrl={`/jokes/${encodeURIComponent(props.nextJokeData.id)}`} 
            randomJokeUrl={`/jokes/${encodeURIComponent(props.randomJokeData.id)}`} 

          />
          
          {/* Likes 
          <div id="likes-container">
          */}

          {/* Live option
          <div id="like-number">
            {{ joke.likes }} Like{{ joke.likes|pluralize }}
          </div>
          */}

          {/* LIKE Button 
            https://codepen.io/mateusz800/pen/OJPZXMa 
            https://ionic.io/ionicons/usage
          */}	

          {/* Live option
          <div id="like-button" >
            <ion-icon id="like-icon" name="heart" /> 
            <input type="hidden" id="likeUrl" data-url="{% url 'jokes:like' joke.id %}" />
            </ion-icon>
          </div>
          */}

          {/*
          <div id="like-button">
            <form action="{% url 'jokes:like' joke.id %}" method="POST">
              {% csrf_token %}
              <button type="submit" name="joke_id" value="{{joke.id}}" class="btn btn-info">Like</button>
            </form>	
          </div>
          */}
          {/*
          </div>
          */}

        </div>

      </Layout>
    );
  }