import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Projects />
            <Skills title="Computer Skills" skills={[
                "Solidworks",
                "PASCO Interface",
                "LTSpice",
                "MatLab",
                "Java",
                "C++/C",
                "Python",
                "Office 365",
                "SQL"
            ]} />

            <Skills title="Technical Skills" skills={[
                "3D Printing",
                "Laser Cutting",
                "Soldering",
                "Lathe",
                "Drill Press"
            ]} />

            <Skills title="Language Skills" skills={[
                "Fluent English (native)",
                "Intermediate Classical Arabic (speaking, reading & writing)"
            ]} />
            <Footer />
        </div>
    );
}

export default App;
