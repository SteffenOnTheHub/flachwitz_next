import { getAllJokesData, getRandomJokeUrl } from '../lib/jokes';


export async function getStaticProps() {

  return {
    redirect: {
      destination: await getRandomJokeUrl(),
      permanent: false, // make this true if you want the redirect to be cached by the search engines and clients forever
    },
    props: {
      fallback: "blocking",
    },
  };

}



export default function Home() {
  return;
}
