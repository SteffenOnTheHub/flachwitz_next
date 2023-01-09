import { getJokeData, getPreviousJokeData, getNextJokeData, getAllJokeIds, getAllJokesData } from '../../lib/jokes';
import Layout from '../../components/layout';
import NavigationBar from '../../components/navigationBar';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring';

type JokeData = {
  id: string;
  joke: string;
};

type PageProps = {
  jokeData: JokeData;
  previousJokeData: JokeData,
  nextJokeData: JokeData,
}

interface Params extends ParsedUrlQuery {
  id: string,
}

export const getStaticProps: GetStaticProps = async (context) => {

  const params = context.params!       // ! is a non-null assertion 
  if(!params || !params.id){
    return {
      props: { error: true },
    };
  }
  
  const jokeId:string = (params as ParsedUrlQuery).id! as string;
  const jokeData = await getJokeData(jokeId);
  const previousJokeData = await getPreviousJokeData(jokeId);
  const nextJokeData = await getNextJokeData(jokeId);
  
  const allJokes = getAllJokesData();
  //const randomJokeData = allJokes[Math.floor(Math.random() * allJokes.length)];

  return {
    props: {
      jokeData,
      previousJokeData,
      nextJokeData,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllJokeIds()
  return {
    paths,
    fallback: false
  }
}


export default function Joke(props : PageProps) {
  
  if(!props){
      return;
  }


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
          randomJokeUrl="/random" 
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