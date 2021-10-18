import { Navbar } from "./components/Index";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
