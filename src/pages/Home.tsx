import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import More from "../components/more/More";
import AppOverview from "../components/overview/AppOverview";
import Powered from "../components/powered/Powered";


const Home = () => {
  return (
    <div className="scroll-smooth">
        <Hero/>
        <Intro/>
        <AppOverview/>
        <Powered/>
        <More/>
    </div>
  );
}

export default Home;
