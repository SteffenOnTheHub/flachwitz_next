import { getJokeData, getAllJokeIds } from '../../lib/jokes';
import Layout from '../../components/layout';

export async function getStaticProps({ params }) {
    const jokeData = await getJokeData(params.id);
    return {
      props: {
        jokeData,
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
