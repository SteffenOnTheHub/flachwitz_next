import { getJokeData, getPreviousJokeData, getNextJokeData, getAllJokeIds } from '../../lib/jokes';
import Layout from '../../components/layout';
import NavigationBar from '../../components/navigationBar';
import NavigationBarComponent from '../../components/navigationBar';

export async function getStaticProps({ params }) {
    const jokeData = await getJokeData(params.id);
    const previousJokeData = await getPreviousJokeData(params.id);
    const nextJokeData = await getNextJokeData(params.id);
    
    return {
      props: {
        jokeData,
        previousJokeData,
        nextJokeData,
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

  export default function Joke( props) {
    return (
      <Layout>

        <div id="jokewrapper">

          {/* implement button which calls django url

          //form
          <div id="like-button">
            <form action="{% url 'jokes:random' %}" method="POST">
              {% csrf_token %}
              <button class="icon-button"><ion-icon name="infinite"></ion-icon></button>
            </form>	
          </div>

          //onClick
          <button class="icon-button"><ion-icon name="infinite" onclick="location.href='{% url 'jokes:random' %}'"></ion-icon></button>

          //link
          <a class="icon-button" href="{% url 'jokes:random' %}""><ion-icon name="arrow-back"></ion-icon></a>
          */}

          {/* Navigation */}
          {/* Live option
          <div id="joke-navigation-button-container">
          <a class="icon-button" href="{% url 'jokes:previous' joke.id %}""><ion-icon name="arrow-back"></ion-icon></a>
          <a class="icon-button" href="{% url 'jokes:random' %}""><ion-icon name="scan"></ion-icon></a>
          <a class="icon-button" href="{% url 'jokes:next' joke.id %}""><ion-icon name="arrow-forward"></ion-icon></a>
          </div>
          */}

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
          
          {/*
          <Link href={`/jokes/${encodeURIComponent(previousJokeId)}`} passHref={true}>
                    next post
                </Link>
          */}

          <NavigationBar previousJokeUrl={`/jokes/${encodeURIComponent(props.previousJokeData.id)}`} nextJokeUrl={`/jokes/${encodeURIComponent(props.nextJokeData.id)}`} />
          
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