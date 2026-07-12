import HomeMostPop from "../components/HomeMostPop";
import HomeMostRated from "../components/HomeMostRated";
import HomeSlider from "../components/HomeSlider";

function Home() {
  return (
    <div className="home-container">
      <HomeSlider />

      <HomeMostPop/>

      <HomeMostRated/>
    </div>
  );
}

export default Home;
