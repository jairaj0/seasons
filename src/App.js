import { Nav } from "./Components/Nav/Nav";
import { Roadmap } from "./Components/Roadmap/Roadmap";
import { Story } from "./Components/Story/Story";
import myVideo from './Assets/seasons4.m4v'
import { Team } from "./Components/Team/Team";


function App() {
  return (
    <>
    <video autoPlay loop muted className="myVideo" >
  <source src={myVideo} type="video/mp4" />
</video>
    <Nav />
    <Story />
    <Roadmap />
    <Team />
    </>
  );
}

export default App;
