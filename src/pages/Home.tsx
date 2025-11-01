import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import AppOverview from "../components/overview/AppOverview";


const Home = () => {
  return (
    <div className="scroll-smooth">
        <Hero/>
        <Intro/>
        <AppOverview/>
    </div>
  );
}

export default Home;
