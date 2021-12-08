import './App.css';
import { Link } from "react-router-dom";
import { Header } from './components/core';
import { APPLICATIONFORM, APPLICATIONLIST} from './pages/routes';




function App() {
  return <div>
    <Header title="HealthIL Application System - Directory" />
    <div class="Card text-center">
      <nav>
        <Link to={APPLICATIONFORM}>Startup Application Form</Link> | {" "}
        <Link to={APPLICATIONLIST}>Pending Applications</Link>
      </nav>
    </div>
  </div>
}

export default App;
