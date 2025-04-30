import "./App.css";
import Card from "./Card";
import Instagrampost from "./Instagrampost";
const movies = [
  {
    title: "hereditary",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FahiRDzmebycKu6QpU4QthjgIEn1.jpg&f=1&nofb=1&ipt=925209a5bcf219b12cb7986a14f13db3798bd8eeffef9692082ba1ec956ee114",
    length: "2:00",
    rating: 100,
  },
  {
    title: "sinister",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-ydriczk%2Fimages%2Fstencil%2F1280x1280%2Fproducts%2F83663%2F83236%2Feuro_trip_quad_movie_poster_buy_now_at_starstills_2424__27938__86035.1394513139.jpg%3Fc%3D2&f=1&nofb=1&ipt=29f7445e5362bffb903cbd5bfe4809e56195afacc5877557138aa26d5f45eeec",
    length: "2:00",
    rating: 100,
  },
  {
    title: "harry potter",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cinemasterpieces.com%2Fharrysorcerer.jpg&f=1&nofb=1&ipt=4b5e9bdbc8693b5882f520beefa46b83868fc0f670db4cc6a548c19ee94f0d78",
    length: "2:00",
    rating: 100,
  },
];

function App() {
  return (
    <>
      <Instagrampost />
      {movies.map((movie, i) => (
        <Card
          key={i}
          title={movie.title}
          length={movie.length}
          rating={movie.rating}
          img={movie.img}
        />
      ))}
    </>
  );
}

export default App;
